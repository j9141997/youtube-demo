import React from "react";
import { Player } from "./components/player";

function App() {
  const [isEnded, setIsEnded] = React.useState(false);

  return (
    <main>
      <h1>Embed YouTube Demo</h1>
      <div>
        <Player onEnded={() => setIsEnded(true)} />
        {isEnded && <p>ended</p>}
      </div>
    </main>
  );
}

export default App;
