import React from "react";
import World from "./components/World";

import "./App.css";

function App(props) {
    return (
        <div className="World">
            <World>
                {/*{props.tiles.map(row => row.map(tile => <EnvTile value={tile} />))}*/}
            </World>
        </div>
    );
}

export default App;
