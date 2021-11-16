import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  productName: "Galeria Gretas",
  companyName: "Gretas",
  loaderUrl: "Build/gretas-0.2.loader.js",
  dataUrl: "Build/gretas-0.2.data",
  frameworkUrl: "Build/gretas-0.2.framework.js",
  codeUrl: "Build/gretas-0.2.wasm",
});

function App() {
  return (
    <div>
      <Unity unityContext={unityContext} />;
    </div>
  );
}

export default App;
