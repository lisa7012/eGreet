import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="my-auto flex flex-col items-center justify-center">
      <div className="flex h-404-cl w-404-cl flex-col justify-end">
        <Image
          src="/404.svg"
          width={600}
          height={245}
          alt="404"
          className="mb-2.5"
        />
      </div>
      <div className="flex flex-col items-center gap-sent-cl">
        <h2 className="self-center text-center text-sent-cl font-medium">
          We could not find the page you were looking for.
        </h2>
        <Link
          href="/"
          className="btn h-btn-cl w-btn-cl rounded-md bg-strawberry-600 text-btn-cl text-white hover:bg-strawberry-hover"
        >
          return to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
