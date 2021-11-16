import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  productName: "Galeria Gretas",
  companyName: "Gretas",
  loaderUrl: "Build/gretas-build.loader.js",
  dataUrl: "Build/gretas-build.data.br",
  frameworkUrl: "Build/gretas-build.framework.js.br",
  codeUrl: "Build/gretas-build.wasm.br",
});

function App() {
  return (
    <div>
      <Unity unityContext={unityContext} />;
    </div>
  );
}

export default App;
