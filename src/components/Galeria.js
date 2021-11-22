import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  productName: "Galeria Gretas",
  companyName: "Gretas",
  loaderUrl: "../../public/UnityBuild/gretas-0.3.loader.js",
  dataUrl: "../../public/UnityBuild/gretas-0.3.data.br",
  frameworkUrl: "../../public/UnityBuild/gretas-0.3.framework.js.br",
  codeUrl: "../../public/UnityBuild/gretas-0.3.wasm.br",
});

const Galeria = () => {
  return (
    <div>
      <h1>GALERIA AQUI</h1>
      <Unity unityContext={unityContext} />;
    </div>
  );
};

export default Galeria;
