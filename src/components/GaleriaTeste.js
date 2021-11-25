import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl:
    "https://gretasgaleria.blob.core.windows.net/data/build/gretas-0.3.loader.js",
  dataUrl:
    "https://gretasgaleria.blob.core.windows.net/data/build/gretas-0.3.data.br",
  frameworkUrl:
    "https://gretasgaleria.blob.core.windows.net/data/build/gretas-0.3.framework.js.br",
  codeUrl:
    "https://gretasgaleria.blob.core.windows.net/data/build/gretas-0.3.wasm.br",
});

const Galeria = () => {
  return (
    <div>
      <Unity
        unityContext={unityContext}
        // style={{ width: "960px", height: "600px" }}
      />
    </div>
  );
};

export default Galeria;
