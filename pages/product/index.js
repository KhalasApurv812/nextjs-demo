import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CardSkeleton from "../CardSkeleton";
import Navbars from "../Navbar";

export default function ProductList({ productId = 100 }) {
  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(true);

  const apiGet = async () => {
    await fetch("https://60ff90a3bca46600171cf36d.mockapi.io/api/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoding(false);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      apiGet();
    }, 2000);
  }, []);

  return (
    <div>
      <>
        <Navbars />
      </>

      <Container>
        <div className="products">
          <h1>
            <Link href="/product/1">
              <a style={{ textDecoration: "none", color: "black" }}>
                Product-1
              </a>
            </Link>
          </h1>{" "}
          {"  "}
          <h1>
            <Link href="/product/2">
              <a style={{ textDecoration: "none", color: "black" }}>
                Product 2
              </a>
            </Link>
          </h1>
          <h1>
            <Link href="/product/3">
              <a style={{ textDecoration: "none", color: "black" }}>
                Product 3
              </a>
            </Link>
          </h1>
          <h1>
            <Link href={`/product/${productId}`}>
              <a style={{ textDecoration: "none", color: "black" }}>
                Product {productId}
              </a>
            </Link>
          </h1>
        </div>
        <Row>
          {loading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            <>
              {data.map((newdata) => {
                return (
                  <Col className="col-md-3 my-2" key={newdata.id}>
                    <Card>
                      <Card.Img variant="top" src={newdata.image} />
                      <Card.Body>
                        <Card.Title>Name :- {newdata.name}</Card.Title>
                        <Card.Text>Category :- {newdata.category}</Card.Text>
                        <Button variant="primary">view details</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </>
          )}
        </Row>
      </Container>
    </div>
  );
}
