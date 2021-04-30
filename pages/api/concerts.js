// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { DateTime, Settings } from "luxon";
import { ddLLyyyy } from "../../lib/constants/dateFormat";
Settings.defaultLocale = "fr";

const handler = nextConnect();
handler.use(middleware);

//get all concerts
handler.get(async (req, res) => {
  try {
    const concerts = await req.db.collection("concerts").find().toArray();
    console.log("👽CLG - concerts", concerts);
    res.json(concerts);
  } catch (error) {
    console.error(error?.message || error);
  }
});

//get concerts for a date
handler.post(async (req, res) => {
  try {
    const date = req.body.concertDate;
    const concerts = await req.db
      .collection("concerts")
      .find({
        startDate: {
          $gte: DateTime.fromFormat(date, ddLLyyyy).startOf("day"),
          $lt: DateTime.fromFormat(date, ddLLyyyy).endOf("day"),
        },
      })
      .sort({ date: 1 })
      .toArray();
    res.json(concerts);
  } catch (error) {
    console.error(error?.message || error);
  }
});

export default handler;
