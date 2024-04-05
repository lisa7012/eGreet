// components
import SearchBar from '../../components/SearchBar';

export const generateMetadata = () => {
  return {
    title: `Photo Gallery`,
  };
};

const EmptySearchResultPage = () => {
  return (
    <>
      <SearchBar />
      <div className="my-auto flex flex-col justify-center">
        <h2 className="self-center text-center text-xl font-medium">
          Oops! Please enter a valid search term.
        </h2>
      </div>
    </>
  );
};

export default EmptySearchResultPage;
