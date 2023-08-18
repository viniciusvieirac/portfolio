import { randomImages } from "@/utils/projetos";
import Carousel from "./Carousel";

export default function Projects() {
  return (
    <>
      <section id="projects">
        <h1 className="text-center font-bold text-4xl mt-8">Projects</h1>
        <Carousel images={randomImages} />
      </section>
    </>
  )
};