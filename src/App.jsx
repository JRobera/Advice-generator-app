import React, { createContext, useEffect, useState } from "react";
import Advice from "./Advice";
import Header from "./Header";

export const AppContext = createContext();

function App() {
    const [apiData, setApiData] = useState({});
    const [isMouseOver, setIsMouseOver] = useState(false);

    const customstyle = { boxShadow: "0 0 25px 0px hsl(150deg 100% 66%)", cursor: "pointer" }

    const handleClick = () => {
        fetch("https://api.adviceslip.com/advice")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                return setApiData(data.slip);
            })
    }
    useEffect(() => {
        handleClick();
    }, []);

    return (
        <AppContext.Provider value={{ apiData }}>
            <div className="card">
                <Header />
                <Advice />
                <div className="divider"></div>
                <button className="btnicon" onClick={handleClick} style={isMouseOver ? customstyle : null} onMouseOver={() => { setIsMouseOver(true) }} onMouseOut={() => { setIsMouseOver(false) }}><img src="icon-dice.svg" alt="fetch button" /></button>
            </div>
        </AppContext.Provider>);
}
export default App;