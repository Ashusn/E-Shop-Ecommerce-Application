import prisma from "@/libs/prismadb";
import moment from "moment";

export default async function getGraphData() {
  try {
    //get the start and end dates for the data range (7 days ago to today)
    const startDate = moment().subtract(6, "days").startOf("day");
    const endDate = moment().endOf("day");

    //query the database to get the order data grouped by createdDate

    const result = await prisma.order.groupBy({
      by: ["createdDate"],
      where: {
        createdDate: {
          gte: startDate.toISOString(),
          lte: endDate.toISOString(),
        },
        status: "complete",
      },
      _sum: {
        amount: true,
      },
    });
    //initialise the object to aggregate the data by day
    const aggregatedDate: {
      [day: string]: { day: string; date: string; totalAmount: number };
    } = {};

    //create a clone of the start date to iterate over each day
    const currentDate = startDate.clone();

    //iterate over each day in the date range
    while (currentDate <= endDate) {
      //formate the day as the string (e.g. "Monday")
      const day = currentDate.format("dddd");
      console.log("day<<<<", day, currentDate);

      aggregatedDate[day] = {
        day,
        date: currentDate.format("YYYY-MM-DD"),
        totalAmount: 0,
      };

      //move to the next day
      currentDate.add(1, "day");
    }

    //calculate the total amount for each day by summing the order counts
    result.forEach((entry) => {
      const day = moment(entry.createdDate).format("dddd");
      const amount = entry._sum.amount || 0;
      aggregatedDate[day].totalAmount += amount;
    });

    //convert the aggregatedDate object to an array and sort it by date
    const formattedData = Object.values(aggregatedDate).sort((a, b) =>
      moment(a.date).diff(moment(b.date))
    );
    
    return formattedData
  } catch (error:any) {
    throw new Error(error)
  }
}
