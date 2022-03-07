import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
    const [data, setData] = useState("");

    useEffect (() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email)
            })
    }, []) // empty array to trigger only on render,
           // without array triggers always that a state is modified,
           // pass some specific states so it triggers only on that state change

    return <div>Hello World {data}</div>
}

export default EffectTutorial;