import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "../public/gretasgaleria.loader.js",
  dataUrl: "../public/gretasgaleria.data.gz",
  frameworkUrl: "../public/gretasgaleria.framework.js.gz",
  codeUrl: "../public/gretasgaleria.wasm.gz",
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
