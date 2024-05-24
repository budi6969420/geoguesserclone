import { useEffect, useState } from "react";

const MainMap = ({ gameData, totalScore, currentGuess, totalPlayedGames }) => {
  const [rerenderKey, setRerenderKey] = useState(0);

  useEffect(() => {
    setRerenderKey((prevKey) => prevKey + 1);
  }, [gameData]);
  return (
    <>
      <div
        style={{
          background: "black",
          position: "absolute",
          width: "300px",
          height: "150px",
          top: "1.3%",
          left: "0.5%",
          overflow: "hidden",
          border: "white solid 0.5px",
          borderRadius: "10px",
          visibility: currentGuess && "collapse",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "50%",
            position: "absolute",
            left: "-15%",
            top: "5%",
          }}
        >
          <embed
            src="/nyancat.gif"
            style={{
              width: "50%",
              height: "100%",
              position: "relative",
              zIndex: "10",
            }}
          />
          <embed
            src="/nyancat.gif"
            style={{
              width: "50%",
              height: "100%",
              position: "absolute",
              left: "25%",
              zIndex: "9",
            }}
          />
          <embed
            src="/nyancat.gif"
            style={{
              width: "50%",
              height: "100%",
              position: "absolute",
              left: "50%",
              zIndex: "8",
            }}
          />
          <embed
            src="/nyancat.gif"
            style={{
              width: "50%",
              height: "100%",
              position: "absolute",
              left: "90%",
            }}
          />
        </div>
        <div style={{ position: "absolute", top: "40%" }}>
          <p style={{ color: "white", padding: "8%", width: "100%" }}>
            <span>Total Score: </span> <span>{totalScore}</span>
            <br />
            <span># Played Rounds: </span> <span>{totalPlayedGames}</span>
            <br />
            {totalPlayedGames != 0 && (
              <>
                <span>Ø Score/Round: </span>
                <span>{Math.round(totalScore / totalPlayedGames)}</span>
              </>
            )}
          </p>
        </div>
      </div>
      <iframe
        key={rerenderKey}
        src={`https://www.google.com/maps/embed?pb=!4v1716445468524!6m8!1m7!1s${gameData.panoramaId}!2m2!1d${gameData.lat}!2d${gameData.long}!3f232.3721763461367!4f0!5f0.7820865974627469`}
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
