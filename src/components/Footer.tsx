import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer
        className="text-3xl text-white fixed inset-x-0 bottom-0 rounded-full bg-white p-6 flex justify-center items-center"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="flex items-center justify-center space-x-6 h-full relative bottom-0 right-0 duration-300 group-hover:opacity-100">
          <a
            href="https://github.com/viniciusvieirac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-gray-400 hover:text-gray-600 "
          >
            <AiFillGithub size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/viniciusvieirac/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-gray-400 hover:text-gray-600 "
          >
            <AiFillLinkedin size={50} />
          </a>
        </div>
      </footer>
    </>
  );
}
