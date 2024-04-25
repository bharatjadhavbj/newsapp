import { Badge, Button } from "react-bootstrap";
import React from "react";
import { Card } from "react-bootstrap";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <>
      <Card className="my-3" style={{ width: "18rem" }}>
        <span
          className="position-absolute top-0  translate-middle badge rounded-pill bg-danger mx-3 "
          style={{ left: "80%", zIndex: "1" }}
        >
          {source}
        </span>
        <Card.Img
          style={{
            height: "200px",
            width: "100%",
            objectFit: "contain",
            margin: "0",
          }}
          variant="top"
          src={imageUrl}
          alt="Image"
        />
        <Card.Body>
          <Card.Title>
            {title}
            <Badge bg="success">New</Badge>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
          </Card.Text>
          <Button
            variant=""
            href={newsUrl}
            target="_blank"
            className="btn btn-outline-dark btn-sm"
          >
            Read More
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewsItem;
