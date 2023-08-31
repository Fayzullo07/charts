import PageContainer from "../layout/PageContainer";

const Tasks = () => {
  return (
    <PageContainer>
        <div className=" md:col-span-3 rounded-lg">
          <div className="flex items-center justify-between m-2 ">
            <h1>Mijoz qoshish</h1>

            <button>Button</button>
          </div>
          <div className=" py-4 m-2 flex gap-4">
            <div className=" bg-white p-4 w-40 rounded-lg" />
            <div className=" bg-white p-4 w-40 rounded-lg" />
            <div className=" bg-white p-4 w-40 rounded-lg" />
            <div className=" bg-white p-4 w-40 rounded-lg" />
          </div>
          <div className=" bg-white p-6 py-44 m-2 rounded-lg">2</div>
        </div>
      
    </PageContainer>
  );
};

export default Tasks;
