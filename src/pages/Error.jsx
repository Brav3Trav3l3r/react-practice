import React from "react";
import Navigation from "../components/Navigation";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  console.log(isRouteErrorResponse(error));

  let message = "Something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    message = "Could not found anything on this route";
  }

  return (
    <>
      <Navigation />
      <main className="error">
        <h1>An error has occured</h1>
        <h2>{message}</h2>
      </main>
    </>
  );
}
