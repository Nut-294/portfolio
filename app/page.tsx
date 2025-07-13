import About from "@/components/About/About";
import Certificate from "@/components/certificate/Certificate";
import Contact from "@/components/Contract/Contract";
import Hero from "@/components/hero/Hero";

const page = () => {
  return (
    <div className="mt-12">
      <Hero />
      <About />
      <Certificate/>
      <Contact />
    </div>
  );
};

export default page;
