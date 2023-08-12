"use client";

import { ChangeEvent, useState } from "react";

export const InputFile = () => {
	const [file, setFile] = useState<File | null>(null);
	const [preview, setPreview] = useState<String>("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const image = e.target.files?.[0] || null;
		setFile(image);
		if (image) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const base64String = e.target?.result;
				setPreview(base64String as string);
			};
			reader.readAsDataURL(image);
		}
	};

	return (
		<>
			{file ? (
				<div
					style={{ backgroundImage: `url(${preview})` }}
					className="w-full h-full cursor-pointer bg-cover bg-center rounded-3xl"
				></div>
			) : (
				<input
					type="file"
					className="block h-full w-full opacity-0 cursor-pointer rounded-3xl"
					onChange={handleChange}
				/>
			)}
		</>
	);
};
