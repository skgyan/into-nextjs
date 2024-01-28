import TodoList from '@/app/components/TodoList';
import db from '@/utils/db';
// import { resolve } from 'path';

const getData = async () => {
    // await new Promise((resolve, reject)=> setTimeout(() => reject(0), 2000));
    const todos = await db.todo.findMany({});
    console.log('getData', todos);
    return todos;
}

const TodosPage = async () => {
    const todos = await getData();
    return <div><TodoList todos={todos} /></div>
}

export default TodosPage;

// for multiple params support add another dynamic folder under [id] 