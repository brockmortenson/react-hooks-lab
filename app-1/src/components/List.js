import React from 'react';
import Todo from './Todo';

const List = (props) => {
    return (
        <div>
            {props.list.map((item, index) => {
                return <Todo key={index} item={item} />
            })}
        </div>
    )
}

export default List;