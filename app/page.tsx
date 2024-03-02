import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <main className="relative z-0 mx-0 my-auto flex h-screen flex-col bg-gradient py-0 max-sm:gap-2.5">
      {/* Origami pattern in the background */}
      <section className="fixed -z-1 grid h-screen w-screen grid-cols-12 grid-rows-12 pt-0">
        <Image
          src="/pattern-g1.svg"
          alt="pattern group 1"
          width={438}
          height={490}
          className="col-span-3 row-start-8 pt-3 max-lg:row-start-10 max-mobile:hidden"
        />
        <Image
          src="/pattern-g2.svg"
          alt="pattern group 2"
          width={521}
          height={688}
          className="col-span-4 col-start-4 row-span-6 row-start-7 mt-11 max-mobile:hidden"
        />
        <Image
          src="/pattern-g3.svg"
          alt="pattern group 3"
          width={756}
          height={361}
          className="col-span-5 col-start-7 row-span-4 row-start-1 max-mobile:col-span-9 max-mobile:col-start-4"
        />
        <Image
          src="/pattern-g4.svg"
          alt="pattern group 4"
          width={521}
          height={688}
          className="col-span-5 col-start-10 row-span-8 row-start-5 max-lg:row-start-10 max-mobile:col-span-9 max-mobile:col-start-4 max-mobile:row-start-7"
        />
      </section>
      {/* TODO: Make separate component or similar to add to layout.tsx and figure out how to grab params to put the right logo */}
      <div className="ml-50px mt-11 inline-block h-logo-cl w-logo-cl max-lg:ml-logo-x-cl max-lg:mt-logo-y-cl">
        <Link href="/" className=" inline-block">
          <Image
            src="/eGreet_logo_gray.svg"
            alt="eGreet Gray Logo"
            width={153}
            height={87}
          />
        </Link>
      </div>
      <div className=" my-auto flex justify-center gap-content-cl px-content-cl max-lg:flex-wrap-reverse">
        <div className="max-lg:gap-intro-cl flex w-785px flex-col gap-7 self-center">
          <p className="self-center text-3xl font-normal text-white max-xl:text-intro-cl max-lg:text-center max-lg:leading-intro-cl">
            Need to send a card, but don&apos;t have time to run to the store?
            At eGreet, you may send free e-cards to your friends, family,
            co-workers, anyone! Simply browse for a photo you want from the
            photo gallery, customize your message, and send away!
          </p>
          {/* TODO: Make a button component with general style that can be changed */}
          <Link
            href="/photogallery"
            className="w-fit rounded-md bg-mustard px-24 py-3 text-center text-lg font-medium hover:animate-bounce hover:shadow-lg motion-reduce:animate-bounce max-xl:px-btn-x-cl max-xl:py-btn-y-cl max-xl:text-btn-cl max-xl:leading-snug max-lg:self-center"
          >
            get started!
          </Link>
        </div>
        <div className="max-lg:w-example-cl">
          <Image
            src="/eCards_example.svg"
            alt="eCards example"
            width={756}
            height={675}
          />
        </div>
      </div>
      {/* TODO: separate component for footer and to put in layout.tsx */}
      <footer className="mb-10 mt-11 flex justify-center text-xl font-normal text-white opacity-70 max-xl:text-footer-cl">
        ©2024 | designed by Victoria Marins & developed by Lisa Duong
      </footer>
    </main>
  );
};

export default Home;
