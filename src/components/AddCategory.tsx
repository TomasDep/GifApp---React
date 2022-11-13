import { useState } from "react";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const AddCategory = ({
  onNewCategory,
}: {
  onNewCategory: any;
}): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>();
  const onInputChange = (event: any) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (event: any) => {
    event.preventDefault();
    const value = inputValue?.trim();
    if (value!.length <= 1) return;
    onNewCategory(value);
    setInputValue("");
  };
  return (
    <Col lg="6">
      <Form onSubmit={(event) => onSubmit(event)}>
        <Form.Group>
          <Form.Control
            className="w-100"
            size="lg"
            type="text"
            placeholder="Search Gif's"
            value={inputValue}
            onChange={(event) => onInputChange(event)}
          />
        </Form.Group>
      </Form>
    </Col>
  );
};
