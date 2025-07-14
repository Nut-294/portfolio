import About from "@/components/About/About";
import Certificate from "@/components/certificate/Certificate";
import Contact from "@/components/Contract/Contract";
import Hero from "@/components/hero/Hero";
import Project from "@/components/project/Project";

const page = () => {
  return (
    <div className="mt-12">
      <Hero />
      <About />
      <Certificate/>
      <Project/>
      <Contact />
    </div>
  );
};

export default page;
