import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl:
    "https://gretasgaleria.blob.core.windows.net/data/build/gretasgaleria.loader.js",
  dataUrl:
    "https://gretasgaleria.blob.core.windows.net/data/build/gretasgaleria.data.br",
  frameworkUrl:
    "https://gretasgaleria.blob.core.windows.net/data/build/gretasgaleria.framework.js.br",
  codeUrl:
    "https://gretasgaleria.blob.core.windows.net/data/build/gretasgaleria.wasm.br",
});

const Galeria = () => {
  // function handleOnClickFullscreen() {
  //   unityContext.setFullscreen(true);
  // }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "75px 0 0 0",
      }}
    >
      <Unity
        unityContext={unityContext}
        style={{
          width: "960px",
          height: "600px",
          margin: "15px",
        }}
      />
    </div>
  );
};

export default Galeria;
