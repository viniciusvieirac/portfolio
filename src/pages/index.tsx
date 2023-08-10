import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Skills from "@/components/Skills";
import Header from "@/components/Header";
import Image from "next/image";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Header />
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
      <Skills />
      <Projects />
      <Form />
      <Footer />
    </div>
  );
}
