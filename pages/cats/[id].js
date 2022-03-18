import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import TopNav from "../../components/TopNav";
import DefaultLayout from "../../layouts/Default";

export default function CatDetails() {
  const [catDetails, setCatDetails] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  const fetchCat = async () => {
    const response = await fetch(`/api/cats/${id}`);
    const data = await response.json();
    setCatDetails(data);
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <>
      <Head>
        <title>Cats World- {catDetails && catDetails.name}</title>
        <meta name="description" content="Adopt cats as friends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        {catDetails && (
          <div className="container py-5">
            <div className="row gx-5">
              <div className="col-12 col-md-6">
                <img
                  src={catDetails.image.url}
                  alt={catDetails.image.alt}
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md-6 ml-3">
                <h1>{catDetails.name}</h1>
                <p>{catDetails.description}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => router.push("/cats")}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        )}
      </DefaultLayout>
    </>
  );
}
