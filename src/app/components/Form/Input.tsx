import { ForwardRefRenderFunction, forwardRef } from "react";

interface IInput {
	placeholder: string;
	type: string;
	title: string;
	className?: string;
}

export const InputBase: ForwardRefRenderFunction<
	HTMLInputElement & HTMLTextAreaElement,
	IInput
> = ({ placeholder, type, title, className, ...rest }, ref) => {
	if (type === "textarea") {
		return (
			<div className={`mb-4 text-blue font-medium ${className}`}>
				<label>{title}</label>
				<textarea
					className="resize-none w-full px-6 py-1 bg-white rounded-lg border border-teal-400"
					placeholder={placeholder}
					ref={ref}
					maxLength={500}
					rows={5}
					{...rest}
				/>
			</div>
		);
	}
	return (
		<div className={`mb-4 text-blue font-medium ${className}`}>
			<label>{title}</label>
			<input
				className="w-full h-10 px-6 py-[5px] bg-white rounded-lg border border-teal-400"
				type={type}
				placeholder={placeholder}
				ref={ref}
				{...rest}
			/>
		</div>
	);
};

export const Input = forwardRef(InputBase);
