import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/gretas-0.3.loader.js",
  dataUrl: "build/gretas-0.3.data.br",
  frameworkUrl: "build/gretas-0.3.framework.js.br",
  codeUrl: "build/gretas-0.3.wasm.br",
});

const Galeria = () => {
  return (
    <div>
      <Unity unityContext={unityContext} />
    </div>
  );
};

export default Galeria;
