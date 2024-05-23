import React, { useEffect, useRef } from "react";

const MainMap = () => {
  const iframeRef = useRef(null);

  return (
    <>
      <div
        style={{
          background: "black",
          position: "absolute",
          width: "180px",
          height: "55px",
          top: "18px",
        }}
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1716445468524!6m8!1m7!1sL2LCMQmo6o-PoqaVETOHhA!2m2!1d53.05552432149108!2d8.781092238431173!3f232.3721763461367!4f0!5f0.7820865974627469"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: "0", height: "100vh", width: "100%" }}
      ></iframe>
    </>
  );
};

export default MainMap;
