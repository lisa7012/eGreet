import type { PhotosResults } from '../schemas/Photos';

const getPageNumber = (url: string) => {
  const { searchParams } = new URL(url);
  return searchParams.get('page');
};

export const getPrevNextPages = (photoResults: PhotosResults | undefined) => {
  let nextPage = photoResults?.next_page
    ? getPageNumber(photoResults.next_page)
    : null;

  const prevPage = photoResults?.prev_page
    ? getPageNumber(photoResults.prev_page)
    : null;

  if (!photoResults) return { nextPage, prevPage };

  const totalPages =
    photoResults.total_results % photoResults.per_page
      ? Math.ceil(photoResults.total_results / photoResults.per_page)
      : photoResults.total_results / photoResults.per_page + 1;

  if (prevPage && parseInt(prevPage) + 5 < totalPages) {
    nextPage = (parseInt(prevPage) + 5).toString();
  }

  if (nextPage && parseInt(nextPage) >= totalPages) nextPage = null;

  return { prevPage, nextPage };
};
