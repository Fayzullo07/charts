import PageContainer from "../layout/PageContainer";

const UserInfo = () => {
  return <PageContainer>
      <div className=" grid grid-cols-1 md:grid-cols-4">
        <div className=" md:col-span-3 rounded-lg">
          <div className=" bg-white p-6 py-40 m-2 rounded-lg">1</div>
          <div className=" bg-white p-6 py-40 m-2 rounded-lg">1</div>
          <div className=" bg-white p-6 py-40 m-2 rounded-lg">1</div>
        </div>
        <div className=" md:col-span-1 rounded-lg sticky">
          <div className=" bg-white p-6 py-20 m-2 rounded-lg">1</div>
          <div className=" bg-white p-6 py-36 m-2 rounded-lg">2</div>
        </div>
      </div>
    </PageContainer>;
};

export default UserInfo;
