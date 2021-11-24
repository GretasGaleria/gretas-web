import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "public/build/gretas-0.3.loader.js",
  dataUrl: "public/build/gretas-0.3.data.br",
  frameworkUrl: "public/build/gretas-0.3.framework.js.br",
  codeUrl: "public/build/gretas-0.3.wasm.br",
});

const Galeria = () => {
  return (
    <div>
      <h1>EM BREVE</h1>
      <Unity unityContext={unityContext} />
    </div>
  );
};

export default Galeria;
