import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="my-auto flex flex-col items-center justify-center">
      {/* //TODO: fix 404 image */}
      <div className="h-404-cl w-404-cl self-center">
        <Image src="/404.svg" width={600} height={245} alt="404" />
      </div>
      <div className="flex flex-col items-center gap-sent-cl">
        <h2 className="self-center text-center text-xl font-medium">
          We could not find the page you were looking for.
        </h2>
        <Link
          href="/"
          className="btn hover:bg-strawberry-hover h-btn-cl w-btn-cl rounded-md bg-strawberry-600 text-btn-cl text-white"
        >
          return to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
