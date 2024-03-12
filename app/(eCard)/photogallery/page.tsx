import { getCuratedPhotos } from '../../lib/api';
import type { PhotosResults } from '../../schemas/Photos';

// components
import Gallery from '../../components/Gallery';
import SearchBar from '@/app/components/SearchBar';

const PhotoGallery = async () => {
  const url = 'https://api.pexels.com/v1/curated';

  const photosResults: PhotosResults | undefined = await getCuratedPhotos(url);

  return (
    <>
      <div className="gap-search-cl flex flex-col max-md:mt-6">
        <SearchBar />
        <Gallery photosResults={photosResults} />
      </div>
    </>
  );
};

export default PhotoGallery;
