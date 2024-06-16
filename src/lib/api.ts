export async function getSearchResults(searchTerm: string, pageNumber: number) {
  try {
    const response = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
        import.meta.env.VITE_API_KEY
      }&text=${searchTerm}&page=${pageNumber}&per_page=20&format=json&nojsoncallback=1`
    );
    if (!response.ok) {
      throw Error(`Error in response: ${response}`);
    }
    const { photos } = await response.json();
    return photos;
  } catch (err) {
    throw Error(`Error in getSearchResults(): ${err}`);
  }
}
