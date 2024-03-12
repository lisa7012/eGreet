import { fetchPhotos } from '../../lib/api';
import type { PhotosResults } from '../../schemas/Photos';

// components
import Gallery from '../../components/Gallery';
import SearchBar from '../../components/SearchBar';

const PhotoGallery = async () => {
  const url = 'https://api.pexels.com/v1/curated';

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

export default PhotoGallery;
