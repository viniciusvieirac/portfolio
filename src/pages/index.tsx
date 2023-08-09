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
          Estudante da Origamid, desenvolvo pequenos projetos como o Bikcraft
          utilizando apenas HTML, CSS e JavaScript. Agregando a tudo isso,
          possuo conhecimento também sobre UX e UI design, conhecimento este que
          me permite criar projetos autênticos e com fundamento.
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
      <section>
        <div className="text-center">
          <h1 className="text-zinc-600 font-bold text-4xl">Projects</h1>
        </div>
      </section>
    </div>
  );
}
