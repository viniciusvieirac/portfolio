import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center max-w-4xl mx-auto mt-8">
        <h1 className="font-bold">Vieira</h1>
        <div className="flex space-x-8 font-normal">
          <a href="">Skills</a>
          <a href="">Projetos</a>
          <a href="">Contato</a>
        </div>
      </header>
      <section className="flex items-center gap-40 max-w-4xl mx-auto mt-32">
        <div>
          <Image
          src='/Rectangle-16.png'
          alt="picture of me"
          width={500}
          height={500}
          />
        </div>
        <div className="gap-y-5">
          <p>Estudante da Origamid, desenvolvo pequenos projetos como o Bikcraft utilizando apenas HTML, CSS e JavaScript. Agregando a tudo isso, possuo conhecimento também sobre UX e UI design, conhecimento este que me permite criar projetos autênticos e com fundamento.</p>
          <span>Rio de janeiro 🌹</span>
        </div>
      </section>
    </div>
  );
}
