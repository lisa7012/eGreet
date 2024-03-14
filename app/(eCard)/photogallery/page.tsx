import { fetchPhotos } from '../../lib/api';
import type { PhotosResults } from '../../schemas/Photos';

// components
import Gallery from '../../components/Gallery';
import SearchBar from '../../components/SearchBar';

const PhotoGallery = async () => {
  // const url = 'https://api.pexels.com/v1/curated?per_page=80';
  const url = 'https://api.pexels.com/v1/curated';

  const photosResults: PhotosResults | undefined = await fetchPhotos(url);

  return (
    <>
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

export default PhotoGallery;
