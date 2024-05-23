import { useState } from "react";
import MainMap from "./components/MainMap";
import MapSelectionForm from "./components/MapSelectionForm";

function App() {
  return (
    <>
      <div style={{ position: "absolute", bottom: "3%", left: "5%" }}>
        <MapSelectionForm />
      </div>
      <MainMap />
    </>
  );
}

export default App;
