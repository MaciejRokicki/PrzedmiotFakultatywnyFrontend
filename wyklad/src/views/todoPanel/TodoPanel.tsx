import React from "react";
import { useSelector } from "react-redux";
import { useAction } from "../../hooks/useAction";
import { TodoService } from "../../services/todo.service";
import todoSelector from "../../store/selectors/todo.selector";

const TodoPanel = () => {
    const todoActions = useAction(TodoService);
    const todos = useSelector(todoSelector.getAll);

    React.useEffect(() => {
        todoActions.setNewTodo(
            {
                id: 123,
                label: 'test',
                done: false,
                description: 'test'
            }
        );
    }, []);
    
    return(
        <div>
            { todos.map((todo, index) => (
                <div key={index}>
                    <button onClick={()=> todoActions.setDeleteTodo(todo)}>remove</button>
                    <p>{todo.label}</p>
                    <p>{todo.done}</p>
                    <p>{todo.description}</p>
                </div>
            ))}
        </div>
    )
}

export default TodoPanel;