/* 
- Font size (paragraph): 14px

- Weights: 400, 600, 700
*/

import ProfileLinks from "./components/ProfileLinks";

function App() {
	return (
		<main className="flex flex-col items-center font-inter justify-center h-screen bg-neutral-offBlack">
			<section className="w-[375px] rounded-xl text-center bg-neutral-darkGrey mx-10">
				<img
					src="./images/avatar-replay.png"
					alt=""
					className="rounded-full mx-auto size-20 mt-8"
				/>
				<h1 className="text-white pt-8 pb-2 text-2xl">Ionut Oltean</h1>
				<h2 className="text-primary-green text-sm opacity-70 pb-4">
					Constanta, Romania
				</h2>
				<p className="text-white text-sm pb-6">
					&quot;Self-Taught Frontend developer .&quot;{" "}
				</p>
				<ProfileLinks />
			</section>
			<footer className="text-[11px] text-center text-white mt-10">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					rel="noreferrer"
					target="_blank"
					className="text-blue-500"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					className="text-blue-500"
					href="https://github.com/replayzor"
					rel="noreferrer"
					target="_blank"
				>
					Ionut Oltean
				</a>
				.
			</footer>
		</main>
	);
}

export default App;
