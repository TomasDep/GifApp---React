import { ISearchGifs, IGifs } from "../models/search-gifs.interface";

export const getGifs = async (
  category: string,
  limit: number = 12
): Promise<IGifs[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=TMJoEJD1tqCCq43kCe9lHFi9yHxAYX4w&q=${category}&limit=${limit}`;
  const res = await fetch(url);
  const search: ISearchGifs = await res.json();
  const gifs: IGifs[] = search.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  return gifs;
};
