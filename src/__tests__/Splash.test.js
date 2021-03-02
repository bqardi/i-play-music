import { render, screen } from "@testing-library/react";
import Splash from "../views/Splash";

test("Expecting 'iPlayMusic' -text to be in the document", () => {
	render(<Splash />);
	var IPlayMusicText = screen.getByText(/iPlayMusic/);
	expect(IPlayMusicText).toBeInTheDocument();
});
