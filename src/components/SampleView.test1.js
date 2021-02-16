import { render, screen } from "@testing-library/react";
import SampleView from "./SampleView";

test("Expecting 'View All' -text to be in the document", () => {
	render(
		<SampleView title="Test" viewAll>
			Test
		</SampleView>
	);
	var ViewAllText = screen.getByText(/view all/i);
	expect(ViewAllText).toBeInTheDocument();
});
