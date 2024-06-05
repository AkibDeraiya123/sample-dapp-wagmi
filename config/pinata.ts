import axios from "axios";

const JWT = process.env.NEXT_PUBLIC_PINATA_API_KEY


export const pinFileToIPFS = async (name: string, description: string, file: File| null) => {
  if (!file) {
    throw new Error('File is missing');
  }
    const formData = new FormData();

    formData.append("file", file!)
    formData.append("name", name)
    formData.append("description", description)
    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', pinataOptions);

    try{
      const res = await axios.post(process.env.NEXT_PUBLIC_PINATA_URL!, formData, {
        maxBodyLength: Infinity,
        headers: {
          'Content-Type': `multipart/form-data`,
          'Authorization': `Bearer ${JWT}`
        }
      });
      return res.data
    } catch (error) {
        return error
    }
}