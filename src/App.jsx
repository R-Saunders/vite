import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Child from "./components/Child";
import Form from "./components/Form";

function App() {
	const [name, setName] = useState("Rich");
	const handleClick = () => {
		alert("You clicked my button");
	};
	return (
		<main>
			<h2>Nice to meet you {name}</h2>
			<Header onChange={(value) => setName(value)} />
			<Child handleClick={handleClick} />
			<Form/>
		</main>
	);
}

export default App;
