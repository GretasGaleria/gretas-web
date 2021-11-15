import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  productName: "Galeria Gretas",
  companyName: "Gretas",
  loaderUrl: "buildUnity/GretasWeb2.loader.js",
  dataUrl: "buildUnity/GretasWeb2.data",
  frameworkUrl: "buildUnity/GretasWeb2.framework.js",
  codeUrl: "buildUnity/GretasWeb2.wasm",
});

function App() {
  return (
    <div>
      <Unity unityContext={unityContext} />;
    </div>
  );
}

export default App;
