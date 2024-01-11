import { useState, useEffect } from "react";

export default function Form() {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("Luke");

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };
		console.log(blog);
	};

	const setBg = () => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		document.body.style.backgroundColor = "#" + randomColor;
	};

	// Remove /vite from start of mp3 url to make it work locally
	const audio = new Audio("/vite/keypress.mp3");
	const start = () => {
		audio.play();
	};
	useEffect(() => {
		setBg();
		start();
	}, [title, body]);

	return (
		<form onSubmit={handleSubmit}>
			<label>
				{title.length <= 10
					? "Blog title"
					: "Blog Title must be under ten characters"}
			</label>
			<input
				type="text"
				required
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<label>Blog Body</label>
			<textarea
				required
				value={body}
				onChange={(e) => setBody(e.target.value)}
			></textarea>
			<label>Blog Author</label>
			<select value={author} onChange={(e) => setAuthor(e.target.value)}>
				<option value="Luke">Luke</option>
				<option value="Ben">Ben</option>
			</select>
			<button>Add Blog</button>
		</form>
	);
}
