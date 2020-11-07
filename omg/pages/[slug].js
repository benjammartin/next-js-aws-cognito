import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Slug({ cat }) {
  const router = useRouter();
  const { defaultLocale, isFallback, query } = router;
  return (
    <div>
      <h2>{cat.title}</h2>
      <h3>{cat.nb}</h3>
      <h4>{cat.slug}</h4>
    </div>
  );
}

export const getStaticPaths = async ({ locales }) => {
  console.log(locales);
  const res = await fetch("http://localhost:3000/api/category");
  const cats = await res.json();
  const paths = cats.map((cat) => ({
    params: { id: cat.id, slug: cat.slug },
  }));
  return { paths, fallback: false };
};

export async function getStaticProps({ params, local }) {
  console.log(local);
  const res = await fetch(`http://localhost:3000/api/category/${params.slug}`);
  const cat = await res.json();
  // Pass post data to the page via props
  return { props: { cat } };
}
