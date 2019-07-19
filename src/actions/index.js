export const ADD_TODO = 'ADD_TODO';
export const RENDER_TODO_LIST='RENDER_TODO_LIST';
export const LOAD_TODO_LIST='LOAD_TODO_LIST';

//tile will be a K/V
export function addToDo(title){
    return {
        type: ADD_TODO,
        toDoItem: {
            _id: (new Date().getTime().toString()),
            title
        }
    }
}

export function loadToDoList(){
    return {
        type: LOAD_TODO_LIST
    };

}


