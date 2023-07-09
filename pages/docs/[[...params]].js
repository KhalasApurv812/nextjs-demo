import { useRouter } from "next/router";
import React from "react";
import First from "../../component/first";
import Blog from "../blog";
import Second from "./second";

export default function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 3) {
    return (
      <h1>
        Veiwing for feature {params[0]} and concept {params[1]} and example{" "}
        {params[2]}
      </h1>
    );
  } else if (params.length === 2) {
    return (
      <h1>
        Veiwing for feature {params[0]} and concept {params[1]} and example{" "}
        {params[2]}
      </h1>
    );
  } else if (params.length === 1) {
    return <Second params={params} />;
    // <h1>Veiwing for feature {params[0]}</h1>;
  }

  return (
    <>
      <h1>Docs</h1>
    </>
  );
}
