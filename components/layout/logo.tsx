const Logo = () => {
  return (
    <h1 className=" flex items-center gap-2">
      <span className=" text-5xl text-background">NFT</span>
      <span
        className=" flex items-end  !bg-clip-text text-transparent !bg-cover !bg-center transition-all"
        style={{ background: "linear-gradient(to top left, #DC2424,#4A569D)" }}
      >
        <p className=" text-5xl">S</p>
        <p className=" text-4xl">E</p>
        <p className="text-4xl">A</p>
      </span>
    </h1>
  );
};

export default Logo;
