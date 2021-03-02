import { act, cleanup, screen, render, waitFor } from "@testing-library/react";
import mockedAxios from "axios";
import { TokenContext } from "../TokenContext";
import DarkmodeContext from "../DarkmodeContext";
import Featured from "../views/Featured";

jest.mock("axios");

describe("Featured component", () => {
	afterEach(cleanup);

	var response = {
		data: {
			playlists: {
				items: [
					{
						id: "0",
						images: [
							{
								url: "https://via.placeholder.com/300/300"
							}
						],
						description: "Rock on"
					},
					{
						id: "1",
						images: [
							{
								url: "https://via.placeholder.com/300/300"
							}
						],
						description: "Noget"
					},
					{
						id: "2",
						images: [
							{
								url: "https://via.placeholder.com/300/300"
							}
						],
						description: "Hello"
					}
				]
			}
		}
	};
	var refresh = {
		data: {
			refresh_token: "4321",
			token_expired: false
		}
	};
	var mockContext = [
		{
			access_token: "1234"
		},
		setToken
	];

	function setToken() {
		return "1234";
	}

	it("Test if the text 'Rock on' is present in the component", async () => {
		mockedAxios.get.mockResolvedValue(response);
		mockedAxios.post.mockResolvedValue(refresh);
		act(() => {
			render(
				<TokenContext.Provider value={mockContext}>
					<DarkmodeContext.Provider value={[false]}>
						<Featured />
					</DarkmodeContext.Provider>
				</TokenContext.Provider>
			);
		});

		await waitFor(() => {
			var text = screen.getAllByText(/featured/i)[0];
			expect(text).toBeInTheDocument();
		});
	});
});
