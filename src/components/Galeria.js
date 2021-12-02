import React, { useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl:
    "https://gretasgaleria.blob.core.windows.net/data/build/gretasgaleria.loader.js",
  dataUrl:
    "https://gretasgaleria.blob.core.windows.net/data/build/gzip/gretasgaleria.data.gz",
  frameworkUrl:
    "https://gretasgaleria.blob.core.windows.net/data/build/gzip/gretasgaleria.framework.js.gz",
  codeUrl:
    "https://gretasgaleria.blob.core.windows.net/data/build/gzip/gretasgaleria.wasm.gz",
});

const Galeria = () => {
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

      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "20px",
              outline: "2px solid white",
            }}
          >
            <div
              style={{
                width: loadProgress.progression * 300,
                height: "20px",
                backgroundColor: "white",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "8px",
            }}
          >
            Carregando...
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;
