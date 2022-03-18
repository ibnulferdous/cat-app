import Head from "next/head";
import React, { useState, useEffect } from "react";
import CatsCard from "../../components/CatsCard";
import TopNav from "../../components/TopNav";
import DefaultLayout from "../../layouts/Default";

export default function Home() {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await fetch("/api/cats");
    const data = await response.json();
    setCats(data);
    console.log(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <>
      <Head>
        <title>Cats World- All Cats</title>
        <meta name="description" content="Adopt cats as friends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {cats.map((cat) => (
              <CatsCard
                key={cat.id}
                name={cat.name}
                phone={cat.phone}
                email={cat.email}
                image={cat.image}
                id={cat.id}
              ></CatsCard>
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
