"use client";
import Error from "next/error";

export default function GlobalError({ error }: { error: any }) {
  return (
    <html>
      <body>
        <Error statusCode={error.statusCode} />                                                                       
      </body>
    </html>
  );
}
