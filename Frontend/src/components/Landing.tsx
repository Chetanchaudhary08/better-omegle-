import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Landing() {
    const [name, setname] = useState("");

    return <div>
        <input type='text' onChange={(e) => {
            setname(e.target.value);
        }}></input>
        <Link to={`/room/?name=${name}`}>Join</Link>
    </div>
}

export default Landing;