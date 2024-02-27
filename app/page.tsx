import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
	return (
		<main className='h-screen z-0 bg-gradient m-0 py-0 relative'>
			{/* Origami pattern in the background */}
			<section className='h-screen w-screen -z-1 fixed pt-0 grid grid-rows-12 grid-cols-12'>
				<Image
					src='/pattern-g1.svg'
					alt='pattern group 1'
					width={438}
					height={490}
					className='col-span-3 row-start-8 pt-3'
				/>
				<Image
					src='/pattern-g2.svg'
					alt='pattern group 2'
					width={521}
					height={688}
					className='col-span-4 row-span-6 col-start-4 row-start-7 mt-11'
				/>
				<Image
					src='/pattern-g3.svg'
					alt='pattern group 3'
					width={756}
					height={361}
					className='col-span-5 row-span-4 row-start-1 col-start-7'
				/>
				<Image
					src='/pattern-g4.svg'
					alt='pattern group 4'
					width={521}
					height={688}
					className='col-span-5 row-span-8 row-start-5 col-start-10'
				/>
			</section>
			{/* TODO: Make separate component or similar to add to layout.tsx and figure out how to grab params to put the right logo */}
			<Link href='/'>
				<Image
					src='/eGreet_logo_gray.svg'
					alt='eGreet Gray Logo'
					width={153}
					height={87}
					className='pt-11 ml-50px'
				/>
			</Link>
			<div className='flex gap-12 mx-auto justify-center relative'>
				<div className='self-center w-785px flex flex-col gap-7'>
					<p className='text-3xl text-white self-center font-light'>
						Need to send a card, but don&apos;t have time to run to the store?
						At eGreet, you may send free e-cards to your friends, family,
						co-workers, anyone! Simply browse for a photo you want from the
						photo gallery, customize your message, and send away!
					</p>
					<Link
						href='/photogallery'
						className='px-24 py-3 bg-mustard w-300px font-medium text-center rounded-md text-lg hover:shadow-lg hover:animate-bounce motion-reduce:animate-bounce'
					>
						get started!
					</Link>
				</div>
				<div>
					<Image
						src='/eCards_example.svg'
						alt='eCards example'
						width={756}
						height={675}
					/>
				</div>
			</div>
			{/* TODO: separate component for footer and to put in layout.tsx */}
			<footer className='text-xl text-white flex justify-center mb-10 mt-11 opacity-70 font-light'>
				©2024 | designed by Victoria Marins & developed by Lisa Duong
			</footer>
		</main>
	);
};

export default Home;
