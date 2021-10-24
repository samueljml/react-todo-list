import { FormEvent, useState } from "react";
import { Input } from "../components/Input";
import wording from "./TodolistWording.json";

export const TodoList = () => {
	const [input, setInput] = useState("");

	return (
		<form className="todo-list container align-middle">
			<h1 className="fs-3 mb-4">{wording.h1}</h1>
			<div className="d-flex">
				<Input
					value={input}
					setValue={setInput}
					placeHolder={wording.input}
				/>
				<button className="btn">{wording.button}</button>
			</div>
		</form>
	);
};
