import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = (): JSX.Element => {
  const [categories, setCategories] = useState(["Totoro"]);
  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <Container className="mt-4">
      <>
        <Row>
          <Col lg="12">
            <h1 className="text-primary">Gif App</h1>
          </Col>
        </Row>
        <Row>
          <AddCategory onNewCategory={(value: any) => onAddCategory(value)} />
        </Row>
        <Row>
          <Col lg="12">
            {categories.map((category: string) => (
              <GifGrid category={category} key={category} />
            ))}
          </Col>
        </Row>
      </>
    </Container>
  );
};
