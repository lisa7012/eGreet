import Card from '../components/Card';
import type { PhotosResults } from '../schemas/Photos';

// Type used for customization values stored in session storage
type customizationValues = {
  fontStyle: string;
  fontColor: string;
  backgroundColor: string;
  message: string;
};

// function to help grab user's customization values from before clicking "select another photo"
export const getCustomizationValuesFromSS = (
  key: string,
  initialValues: customizationValues,
): customizationValues => {
  try {
    const values = window.sessionStorage.getItem(key);
    return values ? JSON.parse(values) : initialValues;
  } catch (e) {
    return initialValues;
  }
};

// function to save user's customization values to session storage when clicking "select another photo"
export const setCustomizationValuesToSS = (
  key: string,
  values: customizationValues,
) => {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(values));
  } catch (e) {
    console.log(e);
  }
};

// function to get the page number from the url
const getPageNumber = (url: string) => {
  const { searchParams } = new URL(url);
  return searchParams.get('page');
};

// function to get the right pagination
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
