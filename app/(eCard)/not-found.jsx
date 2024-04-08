import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="my-auto flex flex-col items-center justify-center gap-sent-cl">
      <div className="h-page-icon-cl w-page-icon-cl">
        {/* <Image
          src="/error_icon.svg"
          width={188}
          height={188}
          alt="error_icon"
        /> */}
      </div>
      <h2 className="self-center text-center text-xl font-medium">
        We could not find the page you were looking for.
      </h2>
      <Link
        href="/"
        className="btn h-btn-cl w-btn-cl rounded-md bg-strawberry-600 text-btn-cl text-white"
      >
        return to home page
      </Link>
    </div>
  );
};

export default NotFound;
