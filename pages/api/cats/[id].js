// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { catsData } from "../../../data";

export default function handler(req, res) {
  const { id } = req.query;

  const cat = catsData.find((cat) => cat.id === Number(id));

  res.status(200).json(cat);
}
