import { login_image } from "../../assets/index";

const LoginLogo = () => {
  return (
    <div className="text-center">
      <img
        className="mx-auto lg:w-80 lg:h-80 md:w-60 md:h-60 w-40 h-40"
        src={login_image}
        alt="login_image"
      />
      <p className="lg:w-4/5 md:w-5/6 mx-auto text-white lg:text-[28px] md:text-[20px] text-[18px] p-4">
        Lorem ipsum dolor sit amet consectetur. Pretium aliquet ac molestie
        lacus. Faucibus arcu aliquam nullam nunc dictumst.
      </p>
    </div>
  );
};

export default LoginLogo;
