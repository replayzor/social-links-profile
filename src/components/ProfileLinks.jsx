const links = [
	{
		id: 1,
		name: "GitHub",
		link: "https://github.com/replayzor",
	},
	{
		id: 2,
		name: "Frontend Mentor",
		link: "https://www.frontendmentor.io/profile/replayzor",
	},
	{
		id: 3,
		name: "Linkedin",
		link: "https://www.linkedin.com/in/ionut-oltean/",
	},
	{
		id: 4,
		name: "Twitter",
		link: "https://twitter.com/replayloll",
	},
	{
		id: 5,
		name: "Instagram",
		link: "https://www.instagram.com/replayzor/?hl=en",
	},
];

function ProfileLinks() {
	return (
		<section className="pb-6">
			{links.map((item) => {
				const { id, name, link } = item;
				return (
					<button
						key={id}
						type="button"
						className="text-white hover:bg-primary-green transition-all duration-300 hover:text-neutral-offBlack cursor-pointer w-[80%] mb-4 py-3 font-normal rounded-lg bg-neutral-grey"
					>
						<a href={link} target="_blank" rel="noreferrer">
							{name}
						</a>
					</button>
				);
			})}
		</section>
	);
}
export default ProfileLinks;
