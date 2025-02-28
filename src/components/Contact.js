import kwesforms from "kwesforms"
import { useEffect } from "react"

function Contact() {
	useEffect(() => {
		kwesforms.init()
	}, [])

	return (
		<div
			className="flex flex-col items-center  main-container pt-10 pb-12 px-10 sm:px-16"
			id="contact"
		>
			<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
				Contact
			</h3>

			<div className="flex items-center w-full">
				<div className="w-0 md:w-1/2 p-5 hidden lg:flex">
					<img src="/static/images/illustration1.svg" alt="3D Illustration" />
				</div>
				<form
					className="kwes-form flex flex-col items-start w-full lg:w-1/2 bg-white bg-opacity-5 rounded-3xl px-7 py-8 sm:px-12 sm:py-10 border border-transparent hover:shadow-md space-y-6 text-sm sm:text-base"
					action="https://kwesforms.com/api/f/vjupCiNM6fcJihlNE8mx"
				>
					<div className="flex flex-col w-full space-y-4">
						<div className="flex flex-col items-start text-gray-500 space-y-3">
							<label for="name" className="text-base sm:text-lg sr-only">
								Your Name
							</label>

							<input
								type="text"
								name="name"
								data-kw-rules="required|min:2|max:50"
								placeholder="Your Name *"
								className="w-full rounded-xl px-5 py-4 sm:px-6 sm:py-5 bg-nik-lightGray bg-opacity-10 focus:outline-none border border-transparent hover:shadow-inner hover:border-gray-200"
							/>
						</div>
						<div className="flex flex-col items-start text-gray-500 space-y-3">
							<label for="email" className="text-base sm:text-lg sr-only">
								Email
							</label>

							<input
								type="text"
								name="email"
								data-kw-rules="required|email"
								placeholder="Your Email *"
								className="w-full rounded-xl px-5 py-4 sm:px-6 sm:py-5 bg-nik-lightGray bg-opacity-10 focus:outline-none border border-transparent hover:shadow-inner hover:border-gray-200"
							/>
						</div>

						<div className="flex flex-col items-start text-gray-500 space-y-3">
							<label for="message" className="text-base sm:text-lg sr-only">
								Message
							</label>

							<textarea
								rows="5"
								name="message"
								data-kw-rules="required|min:50|max:1000"
								placeholder="Write a Message *"
								className="w-full rounded-xl px-5 py-4 sm:px-6 sm:py-5 bg-nik-lightGray bg-opacity-10 focus:outline-none border border-transparent hover:shadow-inner hover:border-gray-200"
							></textarea>
						</div>
					</div>
					<button
						type="submit"
						className="bg-white text-[#15191E] text-sm md:text-sm lg:text-base xl:text-lg px-3 py-3 sm:px-6 sm:py-3 font-medium lg:px-8 lg:py-4 rounded-xl hover:shadow-xl hover:bg-gray-200 hover:text-gray-500 border border-transparent hover:border-gray-300 focus:outline-none"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
