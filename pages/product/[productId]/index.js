import { useRouter } from "next/router";
import React from "react";

export default function ProductDetails() {
  const router = useRouter();
  const slug = router.query.slug;
  return <div>ProductDetails {productId}</div>;
}
