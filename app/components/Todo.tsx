'use client'

import { completeTodo } from "@/utils/actions";
import { useTransition } from "react";

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div
    onClick={() => startTransition(() => completeTodo(todo.id))} 
    className={` ${todo.completed ? "line-through text-gray-700" : ""}`}>
      {todo.content}
    </div>
  );
};

export default Todo;
