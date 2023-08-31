import { styled } from "styled-components";
import { employees, home, logo, tasks, user_info, user_kpi } from "../assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const StyledH2 = styled.h2`
    font-size: 28px;
    font-weight: 700;
  `;

  const StyledP = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #475467;
  `;

  const StyledNav = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    transition: 1s;

    &:hover {
      background: #f7f5fd;
      transition: .5s;
    }
  `;

  const navs = [
    { id: 1, slug: "/", name: "Document", icon: home },
    { id: 2, slug: "/employees", name: "Employees", icon: employees },
    { id: 3, slug: "/tasks", name: "Tasks", icon: tasks },
    { id: 4, slug: "/user-info", name: "User Info", icon: user_info },
    { id: 5, slug: "/user-kpi", name: "User KPI", icon: user_kpi }
  ];

  return (
    <nav className="hidden md:flex flex-col justify-between bg-white w-[15vw] h-[100vh] p-6">
      <div>
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" />
          <StyledH2>Dashboard</StyledH2>
        </div>
        <div className="mt-5">
          <p className="text-gray-400 mt-5 px-4">Main menu</p>
          {navs.map(item =>
            <NavLink to={item.slug} key={item.id}>
              <StyledNav>
                <img src={item.icon} alt={item.name} />
                <StyledP>
                  {item.name}
                </StyledP>
              </StyledNav>
            </NavLink>
          )}
        </div>
      </div>

      <div>
        <p className="px-4 py-2 text-gray-400">Preferences</p>
        <div>
          <StyledP>item.name</StyledP>
          <StyledP>item.name</StyledP>
        </div>
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/employees-filter"}>Employees Filter</Link>
        <Link to={"/tasks-info"}>Task Info</Link>
      </div>
    </nav>
  );
};

export default Navbar;
