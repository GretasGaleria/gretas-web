import React, { useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/gretasgaleria.loader.js",
  dataUrl: "build/gretasgaleria.data.br",
  frameworkUrl: "build/gretasgaleria.framework.js.br",
  codeUrl: "build/gretasgaleria.wasm.br",
});

const GaleriaTeste = () => {
  const [loadProgress, setLoadProgress] = useState({ progression: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  unityContext.on("progress", (progression) => {
    setLoadProgress({ progression: progression });
  });

  unityContext.on("loaded", () => {
    setIsLoaded(true);
  });

  // function handleOnClickFullscreen() {
  //   unityContext.setFullscreen(true);
  // }

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
