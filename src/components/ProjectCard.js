function ProjectCard({ img, title, link, description }) {
	return (
		<div className="w-11/12 border border-white p-2 rounded-[34px] border-opacity-40 hover:border-opacity-0 transition-all">
			<div className="flex w-full flex-col md:flex-row items-start md:items-center justify-between bg-white bg-opacity-5 rounded-3xl p-4 md:p-2 md:h-80 xl:h-96 space-y-6 md:space-y-0 md:space-x-12 hover:border-opacity-20  transition-all duration-300 ease-in-out cursor-pointer">
				<div className="md:w-1/2 w-full rounded-3xl md:h-full">
					<img
						src={img}
						alt={title}
						className="rounded-xl sm:rounded-2xl w-full md:w-auto h-full object-cover"
					/>
				</div>
				<div className="flex w-full md:w-1/2 flex-col items-start space-y-6 md:space-y-6 xl:space-y-12 px-4 sm:px-0">
					<div className="flex flex-col space-y-4 md:space-y-5">
						<h3 className="text-white text-xl sm:text-2xl md:text-2xl xl:text-3xl font-bold line-clamp-1">
							{title}
						</h3>
						<p className="md:text-lg font-normal md:line-clamp-4 text-white">
							{description}
						</p>
					</div>
					<a
						href={link}
						target="_blank"
						className="bg-white text-black px-5 py-4 md:py-3 md:px-4 xl:py-4 xl:px-6 rounded-xl text-base md:text-base xl:text-lg font-normal shadow-xl hover:bg-nik-dark hover:text-white focus:outline-none"
					>
						See Live
					</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
