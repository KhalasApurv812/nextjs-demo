import { useRouter } from "next/router";
import React from "react";

export default function Details() {
  const router = useRouter();
  const { hotelName } = router.query;
  console.log(hotelName);
  if (hotelName === "hayat") {
    return (
      <>
        {hotelName} details:- this is a {hotelName}. address is xyz
      </>
    );
  } else if (hotelName === "lendmark") {
    return (
      <>
        {hotelName} details:- this is a {hotelName}. address is abcd.
      </>
    );
  }
  return <>{}</>;
}
