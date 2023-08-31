import styled from "styled-components";
import { Input } from "antd";
import LoginLogo from "../components/Auth/LoginLogo";
import ButtonUI from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div
        className="md:h-[100vh] md:flex hidden bg-[#4623E9] md:rounded-none rounded-b-3xl justify-center items-center"
        // data-aos="slide-right"
      >
        <LoginLogo />
      </div>
      <div
        className="h-[100vh] flex items-center justify-center"
        // data-aos="slide-left"
      >
        <div className="md:w-[60%] w-[90%]">
          <FormTitle>Ro'yhatdan o'tish</FormTitle>
          <FormSection>
            <Typography>IVV</Typography>
            <StyledInput placeholder="Enter IVV" allowClear />
          </FormSection>
          <FormSection>
            <Typography>VIIB Boshqarmasi</Typography>
            <StyledInput placeholder="Enter VIIB" allowClear />
          </FormSection>
          <FormSection>
            <Typography>Tuman IIBo'lim</Typography>
            <StyledInput placeholder="Enter" allowClear />
          </FormSection>
          <FormSection>
            <Typography>Login</Typography>
            <StyledInput placeholder="Login" allowClear />
          </FormSection>
          <FormSection>
            <Typography>Password</Typography>
            <StyledInputPassword placeholder="Password" />
          </FormSection>
          <ButtonUI title="Kirish" onClick={handleNavigate} />
          <Link to={"/login"} className=" underline  text-blue-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
