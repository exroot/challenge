import { useState, useContext } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { Context } from "../context";

export const FilteredByFilename = () => {
  const [filename, setFilename] = useState("");
  const { getData } = useContext(Context);

  const onHandleChange = (e) => {
    setFilename(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    getData(filename);
  };

  return (
    <Container
      style={{
        marginTop: "1.2rem",
        marginBottom: "1.2rem",
      }}
    >
      <Form
        style={{
          maxWidth: "32rem",
          display: "flex",
        }}
        onSubmit={onHandleSubmit}
      >
        <Row>
          <Col xs={8}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Filenames</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter File Name"
                value={filename}
                onChange={onHandleChange}
              />
            </Form.Group>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
