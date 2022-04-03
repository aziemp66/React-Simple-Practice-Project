import React, { useState } from "react";
import styles from "./App.module.css";
import UserList from "./components/UserList/UserList";

function App() {
	const [users, setUsers] = useState([
		{
			name: "Azie",
			age: 18,
		},
		{
			name: "Budi",
			age: 19,
		},
	]);
	return (
		<div>
			<section className={styles.inputSection}>
				<form className={styles.userInput}>
					<div className={styles.dataField}>
						<div className={styles.inputField}>
							<label htmlFor="username">Username</label>
							<input type="text" id="username" />
						</div>
						<div className={styles.inputField}>
							<label htmlFor="age">Age</label>
							<input type="number" id="age" />
						</div>
					</div>
					<div className={styles.button}>
						<button>Submit</button>
					</div>
				</form>
			</section>
			<section>
				<UserList users={users} />
			</section>
		</div>
	);
}

export default App;
