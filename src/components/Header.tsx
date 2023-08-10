import { User } from "@/types/User";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [myUser, setMyUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/viniciusvieirac")
      .then((response) => response.json())
      .then((data) => {
        setMyUser(data);
      });
  }, []);
  return (
    <>
      {myUser && (
        <>
          <header className="flex justify-between items-center max-w-4xl mx-auto mt-8">
            <h1 className="font-bold text-4xl">{myUser.name}</h1>
            <div className="flex space-x-8 font-normal">
              <a href="#skills">Skills</a>
              <a href="#projects">Projetos</a>
              <a href="#contact">Contato</a>
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
    </>
  );
}
