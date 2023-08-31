import PageContainer from "../layout/PageContainer";

const EmployeesFilter = () => {
  return (
    <PageContainer>
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
          <div className=" bg-white p-6 py-44 m-2 rounded-lg">1</div>
        </div>
      </div>
    </PageContainer>
  );
};

export default EmployeesFilter;
