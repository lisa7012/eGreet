import Image from 'next/image';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <>
      {/* Origami pattern in the background */}
      <section className="fixed -z-1 grid h-screen w-screen grid-cols-12 grid-rows-12 pt-0">
        <Image
          src="/pattern_g1.svg"
          alt="pattern group 1"
          width={438}
          height={490}
          className="col-span-3 row-start-8 pt-3 max-lg:row-start-10 max-mobile:hidden"
        />
        <Image
          src="/pattern_g2.svg"
          alt="pattern group 2"
          width={521}
          height={688}
          className="col-span-4 col-start-4 row-span-6 row-start-7 mt-11 max-mobile:hidden"
        />
        <Image
          src="/pattern_g3.svg"
          alt="pattern group 3"
          width={756}
          height={361}
          className="col-span-5 col-start-7 row-span-4 row-start-1 max-mobile:col-span-9 max-mobile:col-start-4"
        />
        <Image
          src="/pattern_g4.svg"
          alt="pattern group 4"
          width={521}
          height={688}
          className="col-span-5 col-start-10 row-span-8 row-start-5 max-lg:row-start-10 max-mobile:col-span-9 max-mobile:col-start-4 max-mobile:row-start-7"
        />
      </section>
      <div className=" my-auto flex justify-center gap-content-cl px-content-cl max-lg:flex-wrap-reverse">
        <div className="flex w-[785px] flex-col gap-7 self-center max-lg:gap-intro-cl">
          <p className="self-center text-3xl font-normal text-white max-xl:text-intro-cl max-lg:text-center max-lg:leading-intro-cl">
            Need to send a card, but don&apos;t have time to run to the store?
            At eGreet, you may send free eCards to your friends, family,
            co-workers, anyone! Simply browse for a photo you want from the
            photo gallery, customize your message, and send away!
          </p>
          <Link
            href="/photogallery"
            className="btn h-btn-cl w-landing-btn-cl rounded-md bg-mustard text-btn-cl hover:bg-mustard-hover max-lg:self-center"
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
            quality={100}
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
