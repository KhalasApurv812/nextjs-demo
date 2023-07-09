import { useRouter } from "next/router";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Navbars from "../Navbar";

export default function Blog() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <>
        <Navbars />
      </>
      <h1>This is blog page </h1>
      <button onClick={handleClick}>Back to home</button>
    </>
  );
}
