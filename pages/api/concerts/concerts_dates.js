// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from "next-connect";
import middleware from "../../../middleware/database";

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  let dates = await req.db.collection("concerts").findOne();
  res.json(dates);
});

export default handler;
