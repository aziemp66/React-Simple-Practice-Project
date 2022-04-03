import List from "./List";
import styles from "./UserList.module.css";

function UserList(props) {
	return (
		<ul className={styles.usersList}>
			{props.users.map((user) => (
				<List key={user.name} name={user.name} age={user.age} />
			))}
		</ul>
	);
}

export default UserList;
