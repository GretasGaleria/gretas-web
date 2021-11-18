import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  productName: "Galeria Gretas",
  companyName: "Gretas",
  loaderUrl: "Build/gretas-0.3.loader.js",
  dataUrl: "Build/gretas-0.3.data.br",
  frameworkUrl: "Build/gretas-0.3.framework.js.br",
  codeUrl: "Build/gretas-0.3.wasm.br",
});

function App() {
  return (
    <div>
      <Unity unityContext={unityContext} />;
    </div>
  );
}

export default App;
