import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Container } from "react-bootstrap";

export default function Hotelname() {
  const router = useRouter();
  const { hotelName } = router.query;
  console.log(hotelName);
  console.log({ router });

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <Container>
          <div>
            <h1>Hotel-name :- {hotelName}</h1>
          </div>
          <div style={{ display: "flex" }}>
            <Link
              href="/destination/[hotelName]/details"
              as={`/destination/${hotelName}/details`}
            >
              <Button>More info</Button>
            </Link>
            <Link
              href="/destination/[hotelName]/hotel-aeminates"
              as={`/destination/${hotelName}/hotel-aeminates`}
            >
              <Button style={{ marginLeft: "10px" }}>hotelAminates</Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
