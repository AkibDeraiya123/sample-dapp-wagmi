import GlassEffect from "@/components/common/glass-effect";
import Hero from "@/components/main/hero";
import Mint from "@/components/main/mint";

const HomePage = () => {
  return (
    <>
      <GlassEffect />
      <section className="p-2 m-auto max-w-[1140px] relative z-[100]">
        <Hero />
        <Mint />
      </section>
    </>
  );
};

export default HomePage;
