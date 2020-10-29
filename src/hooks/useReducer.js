import React, { useReducer } from "react";
import { counterReducer } from "./countReducer"


// useReducer 第二个参数表示初始值
const init = initArg => {
    // 将字符串转为数字
    return initArg - 0;
}

function UseReducer() {
    // const [state, dispatch] = useReducer(counterReducer);
    // 带初始值 初始函数
    const [state, dispatch] = useReducer(counterReducer, "0", init)
    return (
        <div>
            <h3>HookPage</h3>
            <p>{state}</p>
            <button onClick={dispatch({type: "ADD"})}>add</button>
        </div>
    )
}

export default UseReducer