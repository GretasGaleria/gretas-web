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
  const [progression, setProgression] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  unityContext.on("progress", (progression) => {
    setProgression(progression);
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
        margin: "75px 0 0 0",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ visibility: isLoaded ? "visible" : "hidden" }}>
        <Unity
          unityContext={unityContext}
          style={{
            width: "960px",
            height: "600px",
            margin: "15px",
          }}
        />
      </div>

      <div
        style={{
          visibility: isLoaded ? "hidden" : "visible",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Carregando {progression * 100}%
      </div>
    </div>
  );
};

export default Galeria;
