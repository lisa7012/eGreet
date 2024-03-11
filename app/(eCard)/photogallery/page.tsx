import { getCuratedPhotos } from '../../lib/api';
import type { PhotosResults } from '../../schemas/Photos';

// components
import Gallery from '../../components/Gallery';

const PhotoGallery = async () => {
  const url = 'https://api.pexels.com/v1/curated';

  const photosResults: PhotosResults | undefined = await getCuratedPhotos(url);

  return <Gallery photosResults={photosResults} />;
};

export default PhotoGallery;
