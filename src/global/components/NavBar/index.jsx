import home from "./icons/home.svg";
import programs from "./icons/programs.svg";
import user from "./icons/user.svg";

const NavBar = () => {
  return (
    <nav className="align-center fixed bottom-0 flex h-12 w-screen rounded-t-[20px] bg-black/[0.4]">
      <ul className="flex w-full items-center justify-around">
        <li className="">
          <a href="../../pages/dashboard">
            <img src={home} alt="home" />
          </a>
        </li>
        <li className="">
          <a href="#">
            <img src={programs} alt="programs" />
          </a>
        </li>
        <li className="">
          <a href="#">
            <img src={user} alt="user" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
