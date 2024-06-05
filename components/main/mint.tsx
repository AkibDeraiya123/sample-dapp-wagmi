"use client";

import { Button } from "../common/button";
import { Input } from "../common/input";
import { Textarea } from "../common/textarea";
import Upload from "./upload";
import { useAccount, useWriteContract } from "wagmi";
import { SM_ADDRESS, ABI } from "../../constant/constant";
import { useState } from "react";
import { pinFileToIPFS } from "@/config/pinata";
import toast from "react-hot-toast";
import MintGlassEffect from "../common/mint-glass-effect";

export type TFormdata = {
  name: string;
  description: string;
  image: File | null;
  isLoading: boolean;
};

const Mint = () => {
  const { writeContractAsync } = useWriteContract();
  const initialState = {
    description: "",
    name: "",
    image: null,
    isLoading: false,
  };
  const { address } = useAccount();
  const [formData, setFormData] = useState<TFormdata>(initialState);
  const [image, setImage] = useState("");

  const mint = async (uri: string) => {
    const res = writeContractAsync({
      address: SM_ADDRESS,
      abi: ABI.abi,
      functionName: "mint",
      args: [address, `ipfs://${uri}`],
    });
    return res;
  };

  const handleMintNFT = async () => {
    try {
      const { name, image, description } = formData;
      if (name.trim() === "" || description.trim() === "" || !image) {
        toast.error("All fields are required");
        return;
      }

      setFormData((prev) => ({ ...prev, isLoading: true }));
      const imageURI = await pinFileToIPFS(
        formData.name,
        formData.description,
        formData.image
      );

      if (imageURI.IpfsHash) {
        await mint(imageURI.IpfsHash);
        setFormData((prev) => ({ ...prev, isLoading: false }));
        toast.success("NFT Minted Successfully!!");
        setFormData(initialState);
        setImage("");
      } else {
        toast.error("NFT Miniting failed, Try again later");
      }
    } catch (error) {
      setFormData((prev) => ({ ...prev, isLoading: false }));
      toast.error("Failed to Mint NFT, Try again later");
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative overflow-hidden mb-7">
      <MintGlassEffect />
      <div className=" relative z-[100] max-w-[480px] flex items-center flex-col gap-3 m-auto mt-[52px] mb-4">
        <Upload setFormData={setFormData} image={image} setImage={setImage} />
        <Input
          placeholder="NFT Title"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className=" text-background bg-[#383838] h-12 !placeholder-white"
        />
        <Textarea
          placeholder="Description"
          onChange={(e) => handleInputChange("description", e.target.value)}
          value={formData.description}
          className=" text-background h-28 bg-[#383838] !placeholder-white"
        />
        <div className=" w-full flex items-center justify-end">
          <Button
            variant={address ? "primary" : "primary"}
            onClick={handleMintNFT}
            disabled={!address || formData.isLoading}
          >
            {formData.isLoading ? "Minting..." : "Mint NFT"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Mint;
