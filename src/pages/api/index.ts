import type { NextApiRequest, NextApiResponse } from 'next';

type IndexResponse = {
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IndexResponse>
) {
  res.status(200).json({
    message: "Welcome to Xish' web API!",
  });
}
