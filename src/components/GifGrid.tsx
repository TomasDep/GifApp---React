import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { Row, Col } from "react-bootstrap";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const response = await getGifs(category);
    setImages(response);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <figure className="my-3">
        <Row>
          <Col lg="12" className="mb-2">
            <h3>{category}</h3>
          </Col>
          {images.map((image) => (
            <Col lg="4" className="my-3">
              <GifItem key={image.id} {...image} />
            </Col>
          ))}
        </Row>
      </figure>
    </>
  );
};
