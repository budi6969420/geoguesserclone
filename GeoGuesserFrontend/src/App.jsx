import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import Game from "./components/Game";
import { useNavigate } from "react-router-dom";

function App() {
  const { data, fetchData } = useFetch();
  let [playedLevelIds, setPlayedLevelIds] = useState([]);

  async function getNewGameData(playedGamesIds) {
    let response = await fetchData("Data/GetRandom", "POST", playedGamesIds);
    if (response === "error" && playedLevelIds.length != 0) {
      setPlayedLevelIds([]);
      await getNewGameData([]);
    }
  }

  useEffect(() => {
    const fetchDataOnMount = async () => {
      await getNewGameData([]);
    };

    fetchDataOnMount();
  }, []);

  return (
    <Game
      gameData={data}
      fetchGameData={getNewGameData}
      playedLevelIds={playedLevelIds}
      setPlayedLevelIds={setPlayedLevelIds}
    />
  );
}

export default App;
