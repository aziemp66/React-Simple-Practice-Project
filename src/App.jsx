import React, { useState, useReducer } from "react";
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

	const [userName, setUserName] = useState("");
	const [age, setAge] = useState("");

	const submitHandler = (event) => {
		event.preventDefault();

		setUsers((prevUsers) => [
			...prevUsers,
			{
				name: userName,
				age: age,
			},
		]);
		setUserName("");
		setAge("");
	};

	const nameChangeHandler = (event) => {
		setUserName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setAge(event.target.value);
	};
	return (
		<div>
			<section className={styles.inputSection} onSubmit={submitHandler}>
				<form className={styles.userInput}>
					<div className={styles.dataField}>
						<div className={styles.inputField}>
							<label htmlFor="username">Username</label>
							<input
								type="text"
								id="username"
								onChange={nameChangeHandler}
								value={userName}
							/>
						</div>
						<div className={styles.inputField}>
							<label htmlFor="age">Age</label>
							<input
								type="number"
								id="age"
								onChange={ageChangeHandler}
								value={age}
							/>
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
