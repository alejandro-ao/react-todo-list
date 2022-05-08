import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="todo-list__footer text-center">
      <a href="https://github.com/aavila0707/mern-todo-list" target="_blank">
        Check out the source code on Github <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;
