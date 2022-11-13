import Card from "react-bootstrap/Card";

export const GifItem = ({ id, title, url }) => {
  return (
    <Card>
      <Card.Img src={url} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
