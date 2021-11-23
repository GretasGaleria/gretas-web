import React from "react";
import gretasHtml from "../home/gretas.html";

export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: gretasHtml }} />
  );
}
