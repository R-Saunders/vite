export default function Header(props) {
	console.log(props);
	return (
		<header>
			<h2>Welcome to my website</h2>
			<div><strong>Hosted on:</strong> {import.meta.env.VITE_API_URL}</div>
			<input
				type="text"
				placeholder="Update greeting"
				onChange={(event) => props.onChange(event.target.value)}
			/>
		</header>
	);
}
