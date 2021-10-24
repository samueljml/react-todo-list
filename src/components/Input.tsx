import { FC, FormEvent } from "react";

interface InputProps {
	value: string;
	placeHolder?: string;
	hasButtonToClear?: boolean;
	setValue: (value: string) => void;
}

export const Input: FC<InputProps> = (props) => {
	const onChange = ({
		currentTarget: { value },
	}: FormEvent<HTMLInputElement>) => props.setValue(value);

	const handleClickClear = () => props.setValue("");

	return (
		<div className="position-relative w-100">
			<input
		 		className="form-control"
				placeholder={props.placeHolder}
				value={props.value}
				onChange={onChange}
			/>

			{props.hasButtonToClear && props.value && (
				<button
					type="button"
					className="btn-close"
					onClick={handleClickClear}
				></button>
			)}
		</div>
	);
};
