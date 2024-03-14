const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-row justify-center m-10 bg-pink-400 px-10 w-full h-[100px]">hi, i am from docs layout {children}</div>
    </>
  );
};

export default DocsLayout;
