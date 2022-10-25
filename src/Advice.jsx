import React, { useContext } from "react";
import { AppContext } from "./App";

function Advice() {
    const { apiData } = useContext(AppContext);
    return <p className="advice">"{apiData.advice}"</p>
}

export default Advice;