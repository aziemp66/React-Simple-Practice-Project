import styles from "./List.module.css";

function List(props) {
	return (
		<li className={styles.user}>
			My Name is {props.name}, I am {props.age} years old
		</li>
	);
}

export default List;
