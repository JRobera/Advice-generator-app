import React, { useContext } from "react";
import { AppContext } from "./App";

function Header() {
    const { apiData } = useContext(AppContext);
    return <p className="header">ADVICE # {apiData.id}</p>;
}

export default Header;