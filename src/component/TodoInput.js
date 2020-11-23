import React from "react";
import "../styles/TodoInput.css";

const TodoInput = ({value, onChange, onInsert}) => {
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            onInsert();
        }
    }

    return (
        <div className="todo-input">
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
            <div className="add-button" onClick={onInsert}> + </div>
        </div>
    )
}

export default TodoInput;