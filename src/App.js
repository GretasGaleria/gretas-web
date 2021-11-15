import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  productName: "Galeria Gretas",
  companyName: "Gretas",
  loaderUrl: "Build/GretasWeb2.loader.js",
  dataUrl: "Build/GretasWeb2.data.gz",
  frameworkUrl: "Build/GretasWeb2.framework.js.gz",
  codeUrl: "Build/GretasWeb2.wasm.gz",
});

function App() {
  return (
    <div>
      <h1>Gretas</h1>
      <Unity unityContext={unityContext} />;
    </div>
  );
}

export default App;
