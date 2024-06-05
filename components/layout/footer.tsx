import { Button } from "../common/button";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="  bg-black z-[100] md:fixed bottom-0 w-full">
      <section className=" flex items-center justify-between p-4 max-w-[1140px] m-auto">
        <Logo />
        <p className="text-background">
          NFT Sea 2024 &#169; All Rights Reserved
        </p>

        <Button variant="primary">Explore Marketplace</Button>
      </section>
    </footer>
  );
};

export default Footer;
