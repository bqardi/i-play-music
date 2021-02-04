import axios from "axios";
import { useContext, useEffect } from "react";
import {TokenContext} from "../TokenContext";
import { navigate } from "@reach/router";

export default function Callback(props) {
	var setToken = useContext(TokenContext)[1];

	var code = new URLSearchParams(props.location.search).get("code");

	useEffect(function() {
		axios.post("/.netlify/functions/token", JSON.stringify({
			code
		}))
		.then(response => {
			var data = response.data;
			data.accessed_at = new Date().getTime();
			setToken(data);
			navigate("/featured");
		});
	}, [setToken, code]);

	return null;
}
