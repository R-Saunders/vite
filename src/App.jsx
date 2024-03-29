import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Child from "./components/Child";
import Form from "./components/Form";
import React from "react";

function App() {
	const [name, setName] = useState("");
	const handleClick = () => {
		alert("You clicked the button");
	};
	return (
		<main>
			<h2>Nice to meet you {name}</h2>
			<Header onChange={(value) => setName(value)} />
			<Child handleClick={handleClick} />
			<Form />
		</main>
	);
}

export default App;
