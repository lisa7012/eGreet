import type { Photo, PhotosResults } from '../schemas/Photos';
import { CompletePhotosSchema, PhotoSchema } from '../schemas/Photos';
import env from './env';

// fetching photos with Pexels API
export const fetchPhotos = async (
  url: string,
): Promise<PhotosResults | undefined> => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY,
      },
    });

    if (!res.ok) throw new Error('Fetching photos error!\n');

    const photosResults: PhotosResults = await res.json();

    // Parse results with zod schema
    const parsedResults = CompletePhotosSchema.parse(photosResults);

    if (parsedResults.total_results === 0) return undefined;

    return parsedResults;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
};

export const fetchASinglePhoto = async (
  url: string,
): Promise<Photo | undefined> => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY,
      },
    });

    if (!res.ok) throw new Error('Fetching photo error!\n');

    const photoResult: Photo = await res.json();

    // Parse results with zod schema
    const parsedResult = PhotoSchema.parse(photoResult);

    return parsedResult;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
};
