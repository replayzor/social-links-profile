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
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noreferrer"
						className="text-white flex flex-col hover:bg-primary-green transition-all duration-300 hover:text-neutral-offBlack cursor-pointer w-[80%] m-auto  mb-4 py-3 font-normal rounded-lg bg-neutral-grey"
					>
						{name}
					</a>
				);
			})}
		</section>
	);
}
export default ProfileLinks;
