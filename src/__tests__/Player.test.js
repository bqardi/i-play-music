import { act, cleanup, screen, render, waitFor } from "@testing-library/react";
import mockedAxios from "axios";
import { TokenContext } from "../TokenContext";
import Player from "../views/Player";

jest.mock("axios");

describe("Player component", () => {
	afterEach(cleanup);

	var response = {
		data: {
			id: "1A1WuI3oRpwoIWTB2F3FYY",
			name: "No Evil"
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

	it("Test if the text 'No Evil' is present in the component", async () => {
		mockedAxios.get.mockResolvedValue(response);
		mockedAxios.post.mockResolvedValue(refresh);
		act(() => {
			render(
				<TokenContext.Provider value={mockContext}>
					<Player id="1A1WuI3oRpwoIWTB2F3FYY" />
				</TokenContext.Provider>
			);
		});

		await waitFor(() => {
			var text = screen.getAllByText(/playing/i)[0];
			expect(text).toBeInTheDocument();
		});
	});
});
