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

  // const nextPageArea = nextPage
  //   ? (
  //     // <Link href={`/results/${searchQuery}/${nextPage}`}>
  //     //   {!prevPage ? : ()}
  //     // </Link>
  //   )
  //   :

  return;
};

export default Pagination;
