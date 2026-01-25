import { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";

const Child = () => {
    const theme = useContext(ThemeContext);
   

   

    return (
        <div>
            <h2>This is Child Component</h2>
            <p>Current Theme: {theme}</p>
            
        </div>
    )
}

export default Child;