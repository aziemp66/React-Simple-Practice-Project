import React from "react";
import styles from "./App.module.css";

function App() {
	return (
		<div>
			<section className={styles.userInput}>
				<div>
					<label htmlFor="username">Username</label>
					<input type="text" id="username" />
				</div>
				<div>
					<label htmlFor="age">Age</label>
					<input type="number" id="age" />
				</div>
			</section>
		</div>
	);
}

export default App;
