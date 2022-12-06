import dynamic from "next/dynamic";
import React from "react";
import path from "path";
import fs from "fs";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps<{
  geo: any;
}> = async (context) => {
  const jsonPath = path.join(
    process.cwd(),
    "public",
    "A31-10-19_84-402-早出川.geojson"
  );
  const jsonText = fs.readFileSync(jsonPath, "utf-8");
  const geo = JSON.parse(jsonText);

  return {
    props: { geo },
  };
};

function MapPage({ geo }: InferGetStaticPropsType<typeof getStaticProps>) {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("../components/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return <Map geo={geo} />;
}

export default MapPage;
