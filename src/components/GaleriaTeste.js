import React, { useState } from "react";
import Unity, { UnityContent } from "react-unity-webgl";

const unityContent = new UnityContent({
  loaderUrl: "build/gretasgaleria.loader.js",
  dataUrl: "build/gretasgaleria.data.br",
  frameworkUrl: "build/gretasgaleria.framework.js.br",
  codeUrl: "build/gretasgaleria.wasm.br",
});

const GaleriaTeste = () => {
  const [loadProgress, setLoadProgress] = useState({ progression: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  unityContent.on("progress", (progression) => {
    setLoadProgress({ progression: progression });
  });

  unityContent.on("loaded", () => {
    setIsLoaded(true);
  });

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
        unityContent={unityContent}
        style={{
          width: "960px",
          height: "600px",
          margin: "15px",
        }}
      />

      {/* {!isLoaded && (
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Carregando {loadProgress.progression * 100}%
        </div>
      )} */}
    </div>
  );
};

export default GaleriaTeste;
