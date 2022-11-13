import { GifItem } from "./GifItem";
import { Row, Col } from "react-bootstrap";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { IGifs } from "../models/search-gifs.interface";

export const GifGrid = ({ category }: { category: string }): JSX.Element => {
  const { images, isLoading } = useFetchGifs(category);
  return (
    <>
      <section className="my-3">
        <Row>
          <Col lg="12" className="mb-2">
            <h3>{category}</h3>
            <span className="text-primary">
              {isLoading && <h2>Cargando...</h2>}
            </span>
          </Col>
          {images.map((image: IGifs) => (
            <Col lg="4" className="my-3">
              <GifItem key={image.id} {...image} />
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};
