function About() {
	return (
		<div
			className="flex flex-col items-center  pt-10 pb-12 px-4 sm:px-16"
			id="about"
		>
			<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
				About me
			</h3>
			<div className="flex items-center justify-center w-36 h-36 sm:w-40 sm:h-40 object-contain bg-nik-lightGray p-3 rounded-full shadow-xl hover:shadow-inner cursor-pointer hover:border-gray-100">
				<img
					src="/static/images/heroImgSuraj.jpeg"
					alt="Suraj Rauda"
					className="w-full h-full object-cover  rounded-full"
				/>
			</div>

			<div className="p-8 flex flex-col space-y-4">
				<p className="text-base text-justify sm:text-lg text-white">
				Hello there! I'm Suraj Rauda, a passionate Front End Developer with 3.8 years of hands-on experience. My expertise lies in crafting seamless user experiences using a toolkit that includes JavaScript, ReactJS, NextJS, Tailwind CSS, Bootstrap, and more. I thrive on turning design concepts into reality, having successfully executed numerous projects where I designed reusable components and implemented pages based on Figma designs. My skills extend to API integration, SCSS, CSS, GitHub, Framer Motion, Redux, Chakra UI, React Hook Forms, Formik, JQuery, Git, Axios, and beyond. Let's collaborate to bring your web vision to life with innovation and precision!
				</p>
				<h3 className="text-2xl text-white font-bold">I Love</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-5 xl:flex items-center justify-between">
					<div className="hobbyBox">
						<img
							src="/static/images/user-interface.svg"
							alt="Suraj Rauda hobby"
							className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
						/>
						<h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-white">
							DESIGNING UI
						</h3>
					</div>
					<div className="hobbyBox">
						<img
							src="/static/images/code.svg"
							alt="Suraj Rauda hobby"
							className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
						/>
						<h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-white">
							CODING
						</h3>
					</div>
					<div className="hobbyBox">
						<img
							src="/static/images/mountain.svg"
							alt="Suraj Rauda hobby"
							className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
						/>
						<h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-white">
							MOUNTAINS
						</h3>
					</div>
					<div className="hobbyBox">
						<img
							src="/static/images/travelling.svg"
							alt="Suraj Rauda hobby"
							className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
						/>
						<h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-white">
							TRAVELLING
						</h3>
					</div>
					<div className="hobbyBox">
						<img
							src="/static/images/headphones.svg"
							alt="Suraj Rauda hobby"
							className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
						/>
						<h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-white">
							MUSIC
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
