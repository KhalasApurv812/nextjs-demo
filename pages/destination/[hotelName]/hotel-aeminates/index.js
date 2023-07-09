import { useRouter } from "next/router";
import React from "react";

export default function Hotelaeminates() {
  const router = useRouter();
  const { hotelName } = router.query;
  console.log(hotelName);

  if (hotelName === "hayat") {
    return <>{hotelName} hotelaeminates apurv</>;
  } else if (hotelName === "lendmark") {
    return <>{hotelName} hotelaeminates khalas</>;
  }

  return <div>Hotelaeminates</div>;
}
