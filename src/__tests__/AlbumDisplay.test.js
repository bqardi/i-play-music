import { act, cleanup, screen, render, waitFor } from "@testing-library/react";
import mockedAxios from "axios";
import { TokenContext } from "../TokenContext";
import AlbumDisplay from "../views/AlbumDisplay";

jest.mock("axios");

describe("Player component", () => {
	afterEach(cleanup);

	var response = {
		data: {
			id: "1234",
			name: "Wirks it?"
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

	it("Test if the text 'Wirks it?' is present in the component", async () => {
		mockedAxios.get.mockResolvedValue(response);
		mockedAxios.post.mockResolvedValue(refresh);
		act(() => {
			render(
				<TokenContext.Provider value={mockContext}>
					<AlbumDisplay id="1234" type="album" />
					
				</TokenContext.Provider>
			);
		});

		await waitFor(() => {
			var text = screen.getByText(/wirks it/i);
			expect(text);
		});
	});
});
