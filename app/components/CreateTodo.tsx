/* 
1. create form with input field
2. use client
3. import form in page
4. npm i prisma --save dev
6. npm i @prsima//client@latst
7. npx prisma init --datasource-provider sqllite
id uuid, createdate now(), content string, completed boolean
npx prisma migrate dev --name init

create utils - db.ts
*/

'use client'

import { useState } from "react";
import {newTodo} from '@/utils/actions';

const TodoForm = () => {
    return (
        <div>
            <form action={newTodo}>
                <input type="text" name="content" className="border bg-black"/>
                <button type="submit">add</button>
            </form>
        </div>
    )
}

export default TodoForm;