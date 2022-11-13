import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { IGifs } from "../models/search-gifs.interface";

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<IGifs[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getImages = async () => {
    const response: IGifs[] = await getGifs(category);
    setImages(response);
    setIsLoading(false);
  };
  useEffect(() => {
    getImages();
  }, []);
  return {
    images,
    isLoading,
  };
};
