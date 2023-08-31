import styled from "styled-components";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  width: 100%;
  padding: 14px 32px;
  border-radius: 4px;
  font-weight: 600;
  background-color: #4623e9;
  color: white;
  font-size: 20px;
  line-height: 25px;
  font-weight: 700;
`;

const ButtonUI: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export default ButtonUI;
