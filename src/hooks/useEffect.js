import React, { useEffect, useLayoutEffect } from "react";


function UseEffectPage(props) {
    // 异步
    useEffect(() => {
        console.log("useEffect");
    }, [])
    // 同步
    useLayoutEffect(() => {
        console.log("useLayoutEffect");
    })

    return (
        <div>
            <h3>UseEffectPage</h3>
        </div>
    )
}

export default UseEffectPage