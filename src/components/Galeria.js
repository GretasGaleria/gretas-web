import React, { useState } from "react";
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
  const [progression, setProgression] = useState({ progression: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  unityContext.on("progress", (progression) => {
    setProgression({ progression: progression });
  });

  unityContext.on("loaded", () => {
    setIsLoaded(true);
  });

  console.log(progression);

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

      {!isLoaded && (
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Carregando {progression * 100}%
        </div>
      )}
    </div>
  );
};

export default Galeria;
