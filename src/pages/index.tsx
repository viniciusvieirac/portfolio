import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center max-w-4xl mx-auto mt-8">
        <h1 className="font-bold text-4xl">Vieira</h1>
        <div className="flex space-x-8 font-normal">
          <a href="">Skills</a>
          <a href="">Projetos</a>
          <a href="">Contato</a>
        </div>
      </header>
      <section className="flex items-center gap-40 max-w-4xl mx-auto mt-28">
        <div>
          <Image
          src='/Rectangle-16.png'
          alt="picture of me"
          width={360}
          height={450}
          />
        </div>
        <div>
          <p className="font-black text-6xl mb-20">Desenvolvedor Full Stack.</p>
          <span>Rio de janeiro 🌹</span>
        </div>
      </section>
      <section className="flex items-center gap-48 max-w-4xl mx-auto mt-24">
        <div>
        <Image
          src='/exp.svg'
          alt="exp"
          width={660}
          height={550}
          />
        </div>
        <div>
        Estudante da Origamid, desenvolvo pequenos projetos como o Bikcraft utilizando apenas HTML, CSS e JavaScript. Agregando a tudo isso, possuo conhecimento também sobre UX e UI design, conhecimento este que me permite criar projetos autênticos e com fundamento.
        </div>
      </section>
    </div>
  );
}
