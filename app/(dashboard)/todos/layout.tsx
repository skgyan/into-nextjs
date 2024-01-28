import TodoForm from "@/app/components/CreateTodo";

const DashboardLayout = ({ children }) => {
  return (
    <>
        <TodoForm/>
      <div>{children}</div>
    </>
  );
};

export default DashboardLayout;
