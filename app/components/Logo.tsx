import Link from 'next/link';
import Image from 'next/image';

type LogoProps = {
  src: string;
  alt: string;
};

const Logo = ({ src, alt }: LogoProps) => {
  return (
    <div className="ml-[50px] mt-11 inline-block h-logo-cl w-logo-cl max-lg:ml-logo-x-cl max-lg:mt-logo-y-cl">
      <Link href="/" className=" inline-block">
        <Image
          src={src}
          alt={alt}
          width={153}
          height={87}
          quality={100}
          priority={true}
        />
      </Link>
    </div>
  );
};

export default Logo;
