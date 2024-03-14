import { fetchPhotos } from '../../../lib/api';
import { getPrevNextPages } from '../../../lib/getPrevNextPages';
import type { PhotosResults } from '../../../schemas/Photos';

// components
import Gallery from '../../../components/Gallery';
import SearchBar from '../../../components/SearchBar';

type ResultsProps = {
  params: {
    myParams: (string | undefined)[];
  };
};

export const generateMetadata = ({ params: { myParams } }: ResultsProps) => {
  const searchQuery = myParams?.[0] ?? 'curated';
  const page = myParams?.[1] ?? '1';

  return {
    title: `${searchQuery} - Page ${page}`,
  };
};

const SearchResults = async ({ params: { myParams } }: ResultsProps) => {
  const searchQuery = myParams?.[0] ?? 'curated';
  const page = myParams?.[1] ?? '1';

  let url;
  if (searchQuery === 'curated' && page) {
    url = `https://api.pexels.com/v1/curated?page=${page}`;
  } else if (!page) {
    url = `https://api.pexels.com/v1/search?query=${searchQuery}`;
  } else {
    url = `https://api.pexels.com/v1/search?query=${searchQuery}&page=${page}`;
  }
  // const url = `https://api.pexels.com/v1/search?query=${searchQuery}`;

  const photosResults: PhotosResults | undefined = await fetchPhotos(url);

  const { prevPage, nextPage } = getPrevNextPages(photosResults);

  const paginationProps = { searchQuery, page, nextPage, prevPage };

  return (
    <>
      <SearchBar />
      {!photosResults || photosResults.per_page === 0 ? (
        <div className="my-auto flex flex-col justify-center">
          <h2 className="self-center text-center text-xl font-medium">
            Oops! No photos were found with that search term. Please try again.
          </h2>
        </div>
      ) : (
        <div className="my-auto flex flex-col justify-center">
          <Gallery photosResults={photosResults} />
        </div>
      )}
    </>
  );
};

export default SearchResults;
