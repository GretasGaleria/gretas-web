import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  productName: "Galeria Gretas",
  companyName: "Gretas",
  loaderUrl: "Build/GretasWeb2.loader.js",
  dataUrl: "Build/GretasWeb2.data",
  frameworkUrl: "Build/GretasWeb2.framework.js",
  codeUrl: "Build/GretasWeb2.wasm",
});

function App() {
  return (
    <div>
      <Unity unityContext={unityContext} />;
    </div>
  );
}

export default App;
