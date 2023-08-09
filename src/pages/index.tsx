import Carousel from "@/components/carousel";
import { ImageL } from "@/types/Image";
import { User } from "@/types/User";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    name: 'Song Tunes',
    description: 'This is an application that simulates a music streaming service, like Spotify. Being able to search for songs, favorite them, etc.',
    repo: 'https://github.com/viniciusvieirac/song-tunes'
  },
  {
    id: "2",
    src: "/todo-list.svg",
    alt: "Image 2",
    name: 'ToDo List',
    description: 'Esse projeto consiste em uma lista de tarefas que um indivíduo precisa concluir ou realizar.',
    repo: 'https://github.com/viniciusvieirac/todo-list',
  },
  {
    id: "3",
    src: "/recipes.svg",
    alt: "Image 3",
    name: 'Recipes App',
    description: 'Esse projeto consiste no desenvolvimento de um aplicativo de receitas que utiliza uma API de comidas e bebidas para fornecer aos usuários uma ampla variedade de receitas para explorar, preparar e desfrutar. O aplicativo incluirá recursos como sistema de login, busca por receitas específicas, exibição de ingredientes, início e conclusão de receitas, salvamento de receitas finalizadas e opção de favoritar receitas de comidas e bebidas.',
    repo: 'https://github.com/viniciusvieirac/recipes-app',
  },
  {
    id: "4",
    src: "/shopping.svg",
    alt: "Image 4",
    name: 'Shopping Cart',
    description: 'Esse projeto consiste no desenvolvimento de uma loja online que utiliza a API do Mercado Livre como fonte de dados para exibir produtos aos usuários. A loja é uma plataforma completa de comércio eletrônico, com recursos como filtros por categoria, pesquisa por produto, páginas individuais para cada produto, carrinho de compras e finalização de compra.',
    repo: 'https://github.com/viniciusvieirac/frontend-online-store',
  },
  {
    id: "5",
    src: "/solar-system.svg",
    alt: "Image 5",
    name: 'Solar System',
    description: 'Este projeto mostra algumas viagens espaciais já realizadas.',
    repo: 'https://github.com/viniciusvieirac/solar-system',
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit massa non commodo ultricies. Vivamus condimentum nisl auctor turpis vulputate tincidunt ut eu ipsum. Sed sit amet vulputate nibh, ut aliquet justo. Nam vitae scelerisque nunc, sit amet.
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
              <Image
                src="/github.png"
                alt="GitHub"
                width={100}
                height={100}
              />
              <p className="text-zinc-600 mt-2">GitHub</p>
            </div>
            <div className="block text-center mx-8">
              <Image
                src="/js.png"
                alt="javascript"
                width={100}
                height={100}
              />
              <p className="text-zinc-600 mt-2">JavaScript</p>
            </div>
            <div className="block text-center mx-8">
            <Image
                src="/ts.png"
                alt="typescript"
                width={100}
                height={100}
              />
              <p className="text-zinc-600 mt-2">TypeScript</p>
            </div>
            <div className="block text-center mx-8">
            <Image
                src="/node-js.png"
                alt="node"
                width={100}
                height={100}
              />
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
            <Image
                src="/mysql.png"
                alt="mysql"
                width={100}
                height={100}
              />
              <p className="text-zinc-600 mt-2">MySQL</p>
            </div>
            <div className="block text-center mx-8">
            <Image
                src="/css-icon.png"
                alt="css"
                width={100}
                height={100}
              />
              <p className="text-zinc-600 mt-2">CSS</p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <h1 className="text-center font-bold text-4xl mt-8">Projects</h1>
         <Carousel images={randomImages} />
      </section>
    </div>
  );
}
