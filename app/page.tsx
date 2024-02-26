import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="h-screen bg-landing-pattern px-50px m-0 pt-11 pb-0">
      <Image
          src="/eGreet_logo_gray.svg"
          alt="eGreet Gray Logo"
          width={153}
          height={87}
        />
        <div className="flex gap-12 mx-72px">
          <div className="self-center w-785px flex flex-col gap-7">
            <p className="text-2xl text-white self-center font-normal">
              Need to send card, but don&apos;t have time to run to the store? At eGreet, you may send free e-cards to your friends, family, co-workers, anyone! Simply browse for a photo you want from the photo gallery, customize your message, and send away!
            </p>
            <Link href="/photogallery" className="px-24 py-3 bg-mustard w-300px font-medium text-center rounded-md text-lg">get started!</Link>
          </div>
          <div>
            <Image
              src="/eCards_example.svg"
              alt="eCards example"
              width={756}
              height={675}
            />
          </div>
        </div>
        <footer className="text-xl text-white flex justify-center mb-10 mt-11 opacity-70">
            ©2024 | designed by Victoria Marins & developed by Lisa Duong
        </footer>
    </main>
  );
}

export default Home