import PageContainer from "../layout/PageContainer";

const TasksInfo = () => {
  return (
    <PageContainer>
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
      <div className=" grid grid-cols-1 md:grid-cols-4">
        <div className=" md:col-span-3 rounded-lg">
          <div className=" bg-white p-6 py-52 m-2 rounded-lg">1</div>
        </div>
        <div className=" md:col-span-1 rounded-lg">
          <div className=" bg-white p-6 py-96 m-2 rounded-lg">1</div>
        </div>
      </div>
    </PageContainer>
  );
};

export default TasksInfo;
