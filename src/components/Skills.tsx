import Image from "next/image";
import "animate.css";

export default function Skills() {
  return (
    <>
      <section
        id="skills"
        className="bg-black flex items-center justify-center animate__animated animate-bounce"
        style={{ height: "65vh" }}
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
    </>
  );
}
