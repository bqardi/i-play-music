// import axios from "axios";
import { Component } from "react";
import "./ErrorBoundary.scss";
import MainTitle from "./MainTitle";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, info) {
		// axios.post("/.netlify/functions/error-logging", {
		// 	error,
		// 	info
		// });
		// .then(response => console.log(response));
		console.error("My private error:", this.state.error);
	}

	render() {
		if (this.state.hasError) {
			return (
				<section className="ErrorBoundary">
					<MainTitle title="Whooops!!!" gradient />
					<p>Something went wrong!</p>
					<p className="ErrorBoundary__message">{this.props.errorMessage}</p>
					<small>
						If this error message persists, please contact our administrator at{" "}
						<a href="mailto:admin@email.com">admin@email.com</a> with the subject: 'Error' and the following error
						described in the body (just copy/paste):
					</small>
					<div className="ErrorBoundary__error">
						<div className="ErrorBoundary__errorMessage">{this.state.error.message}</div>
						<div className="ErrorBoundary__errorStack">{this.state.error.stack}</div>
					</div>
				</section>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
