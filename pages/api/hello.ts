// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
    name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const response = await axios.get(`https://api.neople.co.kr/df/servers?apikey=MrUMuSxZucknb1Y4UUOwIaNQuzKr7AUn`);

  console.log(response.data.json());
    res.status(200).json({ name: "John Doe" });
}
