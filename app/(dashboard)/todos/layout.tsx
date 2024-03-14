import TodoForm from "@/app/components/CreateTodo";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="ml-4 mt-4">
        <TodoForm/>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
