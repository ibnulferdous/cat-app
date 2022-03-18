import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Jumbotron = () => {
  const router = useRouter();

  return (
    <div className="bg-primary bg-opacity-10">
      <div className="container py-5 ">
        <h1 className="display-4 text-capitalize">Cats World</h1>
        <p className="fs-4 pb-3">
          Find your new best friend today! Adopt a cat today!
        </p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => router.push("/cats")}
        >
          View Cats
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
