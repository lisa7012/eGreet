import Link from 'next/link';

type PaginationProps = {
  searchQuery: string;
  page: string | undefined;
  prevPage: string | null;
  nextPage: string | null;
};

const Pagination = ({
  searchQuery,
  page,
  prevPage,
  nextPage,
}: PaginationProps) => {
  if (!prevPage && !nextPage) return;

  const pageNums: number[] = [];

  if (prevPage && nextPage) {
    for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
      pageNums.push(i);
    }
  }

  const nextPageArea = nextPage ? (
    <Link
      href={`/results/${searchQuery}/${nextPage}`}
      className={!prevPage ? 'mx-auto' : ''}
    >
      {!prevPage ? 'more' : null} &gt;
    </Link>
  ) : null;

  const prevPageArea = prevPage ? (
    <>
      <Link
        href={`/results/${searchQuery}/${prevPage}`}
        className={!nextPage ? 'mx-auto' : ''}
      >
        &lt;{!nextPage ? 'back' : null}
      </Link>
      {pageNums.map((num, i) =>
        page && num === parseInt(page) ? (
          <span key={i} className="text-strawberry-600">
            {num}
          </span>
        ) : (
          <Link
            key={i}
            href={`/results/${searchQuery}/${num}`}
            className="underline"
          >
            {num}
          </Link>
        ),
      )}
    </>
  ) : null;

  return (
    <div className="mx-auto flex w-60 flex-row items-center justify-between font-bold">
      {prevPageArea}
      {nextPageArea}
    </div>
  );
};

export default Pagination;
