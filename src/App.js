import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  productName: "Galeria Gretas",
  companyName: "Gretas",
  loaderUrl: "Build/gretas-test.loader.js",
  dataUrl: "Build/gretas-test.data.br",
  frameworkUrl: "Build/gretas-test.framework.js.br",
  codeUrl: "Build/gretas-test.wasm.br",
});

function App() {
  return (
    <div>
      <Unity unityContext={unityContext} />;
    </div>
  );
}

export default App;
