import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Navbars from "../Navbar";

export default function Destination() {
  const hotel = [{ name: "hayat" }, { name: "lendmark" }];

  return (
    <>
      <Navbars />
      <div>Destination</div>
      <Container>
        <Row>
          {hotel.map((data, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Col key={index}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Link
                      href="/destination/[hotelName]"
                      as={`/destination/${data.name}`}
                    >
                      <Button variant="primary" value={data.name}>
                        view details
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
