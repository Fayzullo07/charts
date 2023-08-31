import styled from "styled-components";
import { Input } from "antd";
import LoginLogo from "../components/Auth/LoginLogo";
import ButtonUI from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const FormTitle = styled.h2`
    color: #353740;
    text-align: center;
    font-family: Mulish;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `;

  const FormSection = styled.div`margin: 16px auto;`;

  const Typography = styled.p`
    color: #1c1e23;
    text-overflow: ellipsis;
    font-family: Mulish;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px; /* 100% */
    margin: 8px auto;
  `;

  // ...other styled components...
  const StyledInput = styled(Input)`
  padding: 16px 24px;
  
`;

  const StyledInputPassword = styled(Input.Password)`
  padding: 16px 24px;
  
`;

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 fixed top-0 left-0 right-0 bottom-0">
      <div className="md:h-[100vh] h-[50vh] bg-[#4623E9] md:rounded-none rounded-b-3xl flex justify-center items-center animate_left">
        <LoginLogo />
      </div>
      <div className="md:h-[100vh] h-[50vh] flex items-center justify-center animate_right">
        <div className="md:w-[60%] w-[90%]">
          <FormTitle>Tizimga kirish</FormTitle>
          <FormSection>
            <Typography>Login</Typography>
            <StyledInput placeholder="Login" allowClear />
          </FormSection>
          <FormSection>
            <Typography>Parol</Typography>
            <StyledInputPassword placeholder="Parol" />
          </FormSection>
          <ButtonUI title="Kirish" onClick={handleNavigate} />
          <Link to={"/register"} className=" underline  text-blue-500">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
