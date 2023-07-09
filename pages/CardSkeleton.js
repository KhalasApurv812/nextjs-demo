import React from "react";
import { Card, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CardSkeleton() {
  return (
    <Col className="col-md-3 my-2">
      <Card style={{ height: "100%" }}>
        <Skeleton width={"100%"} height={194} />
        <Card.Body>
          <Card.Title>
            <Skeleton height={25} />
          </Card.Title>
          <Card.Title>
            <Skeleton height={25} style={{ marginTop: "15px" }} />
          </Card.Title>
          <Card.Title>
            <Skeleton height={25} style={{ marginTop: "15px" }} />
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}
