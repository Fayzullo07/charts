import PageContainer from "../layout/PageContainer";

const Employees = () => {
  return (
    <PageContainer>
      <div className="">
        <div className=" md:col-span-3 rounded-lg">
          <div className=" py-4 m-2 flex gap-4">
            <div className=" bg-white p-4 w-40 rounded-lg" />
            <div className=" bg-white p-4 w-40 rounded-lg" />
            <div className=" bg-white p-4 w-40 rounded-lg" />
            <div className=" bg-white p-4 w-40 rounded-lg" />
          </div>
          <div className=" bg-white p-6 py-44 m-2 rounded-lg">2</div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Employees;
