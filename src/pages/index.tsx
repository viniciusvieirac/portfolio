import Carousel from "@/components/carousel";
import { ImageL } from "@/types/Image";
import { User } from "@/types/User";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  const [myUser, setMyUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/viniciusvieirac")
      .then((response) => response.json())
      .then((data) => {
        setMyUser(data);
      });
  }, []);

  const randomImages: ImageL[] = [
    {
      id: "1",
      src: "/undraw-music.svg",
      alt: "Image 1",
      name: "Song Tunes",
      description:
        "This is an application that simulates a music streaming service, like Spotify. Being able to search for songs, favorite them, etc.",
      repo: "https://github.com/viniciusvieirac/song-tunes",
    },
    {
      id: "2",
      src: "/todo-list.svg",
      alt: "Image 2",
      name: "ToDo List",
      description:
        "This project consists of a list of tasks that an individual needs to complete or accomplish.",
      repo: "https://github.com/viniciusvieirac/todo-list",
    },
    {
      id: "3",
      src: "/recipes.svg",
      alt: "Image 3",
      name: "Recipes App",
      description:
        "This project consists of developing a recipe application that uses a food and drink API to provide users with a wide variety of recipes to explore, prepare, and enjoy. The application will include features such as a login system, searching for specific recipes, displaying ingredients, starting and completing recipes, saving finished recipes, and the option to bookmark food and beverage recipes.",
      repo: "https://github.com/viniciusvieirac/recipes-app",
    },
    {
      id: "4",
      src: "/shopping.svg",
      alt: "Image 4",
      name: "Shopping Cart",
      description:
        "This project consists of the development of an online store that uses the Mercado Livre API as a data source to display products to users. The store is a complete e-commerce platform, with features such as filters by category, search by product, individual pages for each product, shopping cart and checkout.",
      repo: "https://github.com/viniciusvieirac/frontend-online-store",
    },
    {
      id: "5",
      src: "/solar-system.svg",
      alt: "Image 5",
      name: "Solar System",
      description: "This project shows some space trips already made.",
      repo: "https://github.com/viniciusvieirac/solar-system",
    },
  ];

  return (
    <div>
      {myUser && (
        <>
          <header className="flex justify-between items-center max-w-4xl mx-auto mt-8">
            <h1 className="font-bold text-4xl">{myUser.name}</h1>
            <div className="flex space-x-8 font-normal">
              <a href="">Skills</a>
              <a href="">Projetos</a>
              <a href="">Contato</a>
            </div>
          </header>
          <section className="flex items-center gap-40 max-w-4xl mx-auto mt-28">
            <div>
              <Image
                src={myUser.avatar_url}
                alt="picture of me"
                width={550}
                height={550}
              />
            </div>
            <div>
              <p className="font-black text-6xl mb-20">
                Desenvolvedor Full Stack.
              </p>
              <span>{myUser.location} 🌹</span>
            </div>
          </section>
        </>
      )}
      <section className="flex items-center gap-48 max-w-4xl mx-auto mt-24 mb-16">
        <div>
          <Image src="/exp.svg" alt="exp" width={660} height={550} />
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit
          massa non commodo ultricies. Vivamus condimentum nisl auctor turpis
          vulputate tincidunt ut eu ipsum. Sed sit amet vulputate nibh, ut
          aliquet justo. Nam vitae scelerisque nunc, sit amet.
        </div>
      </section>
      <section
        className="bg-black flex items-center justify-center"
        style={{ height: "50vh" }}
      >
        <div className="text-center">
          <h1 className="text-zinc-600 font-bold text-4xl">Skills</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            <div className="block text-center mx-8">
              <Image src="/github.png" alt="GitHub" width={100} height={100} />
              <p className="text-zinc-600 mt-2">GitHub</p>
            </div>
            <div className="block text-center mx-8">
              <Image src="/js.png" alt="javascript" width={100} height={100} />
              <p className="text-zinc-600 mt-2">JavaScript</p>
            </div>
            <div className="block text-center mx-8">
              <Image src="/ts.png" alt="typescript" width={100} height={100} />
              <p className="text-zinc-600 mt-2">TypeScript</p>
            </div>
            <div className="block text-center mx-8">
              <Image src="/node-js.png" alt="node" width={100} height={100} />
              <p className="text-zinc-600 mt-2">Node.js</p>
            </div>
            <div className="block text-center mx-8">
              <Image
                src="/React-icon.svg.png"
                alt="react"
                width={100}
                height={100}
              />
              <p className="text-zinc-600 mt-2">React</p>
            </div>
            <div className="block text-center mx-8">
              <Image
                src="/redux-logo.png"
                alt="redux"
                width={100}
                height={100}
              />
              <p className="text-zinc-600 mt-2">Redux</p>
            </div>
            <div className="block text-center mx-8">
              <Image src="/mysql.png" alt="mysql" width={100} height={100} />
              <p className="text-zinc-600 mt-2">MySQL</p>
            </div>
            <div className="block text-center mx-8">
              <Image src="/css-icon.png" alt="css" width={100} height={100} />
              <p className="text-zinc-600 mt-2">CSS</p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <h1 className="text-center font-bold text-4xl mt-8">Projects</h1>
        <Carousel images={randomImages} />
      </section>
      <form
  action=""
  className="bg-black flex justify-center items-center relative"
  style={{ height: "60vh" }}
>
  <div className="flex flex-col items-center" style={{ width: "100%" }}>
    <h1 className="text-zinc-600 font-bold text-4xl">Entre em contato</h1>
    <input
      type="text"
      className="border w-80 border-gray-300 rounded-md p-3 bg-transparent text-white mt-4 focus:outline-none focus:border-zinc-600"
      placeholder="Nome"
    />
    <input
      type="email"
      className="border w-80 border-gray-300 rounded-md p-3 bg-transparent text-white mt-4 focus:outline-none focus:border-zinc-600"
      placeholder="E-mail"
    />
    <textarea
      className="border w-80 border-gray-300 rounded-md p-3 bg-transparent text-white mt-4 focus:outline-none focus:border-zinc-600"
      rows={5}
      placeholder="Sua mensagem"
      name=""
      id=""
    ></textarea>
  </div>
</form>

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
    </div>
  );
}
