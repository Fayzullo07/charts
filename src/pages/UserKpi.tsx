import PageContainer from "../layout/PageContainer";

const UserKpi = () => {
  return (
    <PageContainer>
      <div className=" py-4 m-2 flex flex-wrap gap-4">
        <div className=" bg-white p-6 min-w-[450px] rounded-lg" />
        <div className=" bg-white p-6 min-w-[150px] rounded-lg" />
        <div className=" bg-white p-6 min-w-[250px] rounded-lg" />
        <div className=" bg-white p-6 min-w-[200px] rounded-lg" />
        <div className=" bg-white p-6 min-w-[150px] rounded-lg" />
        <div className=" bg-white p-6 min-w-[250px] rounded-lg" />
        <div className=" bg-white p-6 min-w-[200px] rounded-lg" />
        <div className=" bg-white p-6 min-w-[150px] rounded-lg" />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-4">
        <div className=" md:col-span-3 rounded-lg">
          <div className=" bg-white p-6 py-32 m-2 rounded-lg">1</div>
        </div>
        <div className=" md:col-span-1 rounded-lg">
          <div className=" bg-white p-6 py-20 m-2 rounded-lg">1</div>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-4">
        <div className=" md:col-span-3 rounded-lg">
          <div className=" bg-white p-6 py-40 m-2 rounded-lg">1</div>
          <div className=" bg-white p-6 py-24 m-2 rounded-lg">2</div>
        </div>
        <div className=" md:col-span-1 rounded-lg">
          <div className=" bg-white p-6 py-36 m-2 rounded-lg">1</div>
          <div className=" bg-white p-6 py-20 m-2 rounded-lg">2</div>
        </div>
      </div>

      <div>
        <div className=" bg-white p-6 py-20 m-2 rounded-lg">1</div>
      </div>
    </PageContainer>
  );
};

export default UserKpi;
