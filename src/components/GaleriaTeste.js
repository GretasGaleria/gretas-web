import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "gretasgaleria.loader.js",
  dataUrl: "gretasgaleria.data.gz",
  frameworkUrl: "gretasgaleria.framework.js.gz",
  codeUrl: "gretasgaleria.wasm.gz",
});

const GaleriaTeste = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "75px 0 0 0",
        alignItems: "center",
        justifyContent: "center",
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

export default GaleriaTeste;
