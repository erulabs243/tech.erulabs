import React from "react";

import {
	AtIcon,
	PhoneIcon,
	SendPlane2Icon,
	User4Icon,
	User6Icon,
	WhatsappIcon,
} from "@remixicons/react/line";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import ContactSchemaType, { ContactSchema } from "./schemas/contact";

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm();

	const submitForm = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
				<div className="form-control">
					<label htmlFor="firstname" className="label">
						<span className="label-text">Firstname</span>
					</label>
					<label htmlFor="firstname" className="input-group">
						<span>
							<User4Icon className="w-4 h-4" />
						</span>
						<input
							type="text"
							name="firstname"
							id="firstname"
							className="input input-md input-bordered w-full"
							required
							{...register("firstname")}
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="lastname" className="label">
						<span className="label-text">Last name</span>
					</label>
					<label htmlFor="lastname" className="input-group">
						<span>
							<User6Icon className="w-4 h-4" />
						</span>
						<input
							type="text"
							name="lastname"
							id="lastname"
							className="input input-md input-bordered w-full"
							required
							{...register("lastname")}
						/>
					</label>
				</div>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
				<div className="form-control">
					<label htmlFor="email" className="label">
						<span className="label-text">Your Email</span>
					</label>
					<label htmlFor="email" className="input-group">
						<span>
							<AtIcon className="w-4 h-4" />
						</span>
						<input
							type="email"
							name="email"
							placeholder="info@site.com"
							className="input input-bordered w-full"
							required
							{...register("email")}
						/>
					</label>
				</div>

				<div className="form-control">
					<label htmlFor="phone" className="label">
						<span className="label-text">Phone number</span>
					</label>
					<label htmlFor="phone" className="input-group">
						<span>
							<PhoneIcon className="w-4 h-4" />
						</span>
						<input
							type="tel"
							name="phone"
							id="phone"
							className="input input-bordered w-full"
							required
							{...register("phone")}
						/>
					</label>
					<div className="form-control">
						<label
							htmlFor="whatsapp"
							className="label cursor-pointer justify-start"
						>
							<input
								type="checkbox"
								name="whatsapp"
								id="whatsapp"
								className="checkbox checkbox-sm"
							/>
							<span className="label-text pl-4 flex flex-row items-center">
								<span>
									<WhatsappIcon className="mr-1 w-4 h-4" />
								</span>
								Contact me using WhatsApp
							</span>
						</label>
					</div>
				</div>
			</div>
			<div className="form-control w-full mb-4">
				<label htmlFor="message" className="label">
					<span className="label-text">Message</span>
				</label>
				<label htmlFor="message" className="input-group">
					<textarea
						className="textarea textarea-bordered h-48 w-full"
						{...register("message")}
					/>
				</label>
			</div>

			<div className="w-full">
				<button
					className="btn btn-primary float-right gap-2"
					disabled={isSubmitting}
				>
					Send Message <SendPlane2Icon className="w-4 h-4" />
				</button>
			</div>
		</form>
	);
};

export default Contact;
