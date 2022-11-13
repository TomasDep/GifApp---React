import Card from "react-bootstrap/Card";

export const GifItem = ({
  id,
  title,
  url,
}: {
  id: string;
  title: string;
  url: string;
}) => {
  return (
    <Card>
      <Card.Img src={url} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
