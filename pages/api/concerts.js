// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  const concerts = await req.db.collection("concerts").find().toArray();
  res.json(concerts);
});

export default handler;
