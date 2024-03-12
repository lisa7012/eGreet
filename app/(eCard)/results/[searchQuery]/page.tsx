import { fetchPhotos } from '../../../lib/api';
import type { PhotosResults } from '../../../schemas/Photos';

// components
import Gallery from '../../../components/Gallery';
import SearchBar from '../../../components/SearchBar';

type ResultsProps = {
  params: {
    searchQuery?: string | undefined;
  };
};

export const generateMetadata = ({ params: { searchQuery } }: ResultsProps) => {
  return {
    title: `Photo Gallery - ${searchQuery}`,
  };
};

const SearchResults = async ({ params: { searchQuery } }: ResultsProps) => {
  const url = `https://api.pexels.com/v1/search?query=${searchQuery}`;

  const photosResults: PhotosResults | undefined = await fetchPhotos(url);

  return (
    <>
      <SearchBar />
      <div className="my-auto flex flex-col justify-center">
        <Gallery photosResults={photosResults} />
      </div>
    </>
  );
};

export default SearchResults;
