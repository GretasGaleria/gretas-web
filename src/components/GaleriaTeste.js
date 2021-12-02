import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./build/gretasgaleria.loader.js",
  dataUrl: "./build/gretasgaleria.data.gz",
  frameworkUrl: "./build/gretasgaleria.framework.js.gz",
  codeUrl: "./build/gretasgaleria.wasm.gz",
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
