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

const Galeria = (): JSX.Element => {
  const [loadProgress, setLoadProgress] = useState<object>({ progression: 0 });
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  unityContext.on("progress", (progression: number) => {
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

export default Galeria;
