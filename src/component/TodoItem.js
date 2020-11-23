import React from 'react';
import classNames from 'classnames';

import "../styles/TodoItem.css"

class TodoItem extends React.Component{
    render(){
        const {done, children, onToggle, onRemove} = this.props;

        return (
            <div className = "todo-item" onClick = {onToggle}>
                <input className="tick" type="checkbox" checked={done} readOnly/>
                <div className={classNames("text", {done})}>{children}</div>
                <div className="delete" onClick={(e) =>{
                    onRemove();
                    e.stopPropagation();
                    }}>[지우기]</div>
            </div>
        );
    }
}

export default TodoItem;