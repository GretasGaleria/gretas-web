import React, { useState } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/gretasgaleria.loader.js",
  dataUrl: "build/gretasgaleria.data.br",
  frameworkUrl: "build/gretasgaleria.framework.js.br",
  codeUrl: "build/gretasgaleria.wasm.br",
});

const GaleriaTeste = (): JSX.Element => {
  const [loadProgress, setLoadProgress] = useState<object>({ progression: 0 });
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  unityContext.on("progress", (progression: number) => {
    setLoadProgress({ progression: progression });
  });

  unityContext.on("loaded", () => {
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
