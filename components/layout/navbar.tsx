import { WalletOptions } from "@/config/wallet-options";
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="p-2 m-auto max-w-[1140px]  h-[80px] pt-6 relative z-[100] ">
      <header className=" flex items-center justify-between">
        <Logo />

        <div className=" flex items-center gap-4">
          <p className=" text-sm text-background">Explore Marketplace</p>
          <WalletOptions />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
