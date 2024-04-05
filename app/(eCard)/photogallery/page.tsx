import { fetchPhotos } from '../../lib/api';
import { getPrevNextPages } from '../../lib/utils';
import type { PhotosResults } from '../../schemas/Photos';
import type { Metadata } from 'next';

// components
import Gallery from '../../components/Gallery';
import SearchBar from '../../components/SearchBar';
import Pagination from '../../components/Pagination';

export const metadata: Metadata = {
  title: 'Photo Gallery',
};

const PhotoGalleryPage = async () => {
  const url = 'https://api.pexels.com/v1/curated';

  const photosResults: PhotosResults | undefined = await fetchPhotos(url);

  const { prevPage, nextPage } = getPrevNextPages(photosResults);

  const paginationProps = {
    searchQuery: 'curated',
    page: '1',
    nextPage,
    prevPage,
  };

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
      <Pagination {...paginationProps} />
    </>
  );
};

export default PhotoGalleryPage;
