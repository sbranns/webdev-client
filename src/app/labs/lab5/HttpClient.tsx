
"use client";

import { useEffect, useState } from "react";
import * as client from "./client";

export default function HttpClient() {
	const [welcomeOnClick, setWelcomeOnClick] = useState("");
	const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

	const fetchWelcomeOnClick = async () => {
		const message = await client.fetchWelcomeMessage();
		setWelcomeOnClick(message);
	};

	useEffect(() => {
		const fetchWelcome = async () => {
			const welcome = await client.fetchWelcomeMessage();
			setWelcomeOnLoad(welcome);
		};

		fetchWelcome();
	}, []);

	return (
		<>
			<button type="button" onClick={fetchWelcomeOnClick}>
				Fetch Welcome
			</button>

			<p>
				Response from server: <b>{welcomeOnClick}</b>
			</p>

			<h4>Requesting on Load</h4>

			<p>
				Response from server: <b>{welcomeOnLoad}</b>
			</p>
		</>
	);
}
