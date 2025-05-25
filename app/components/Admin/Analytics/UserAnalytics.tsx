import { useGetUsersAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";
import Loader from "../../Loader/Loader";
import { styles } from "@/app/Styles/style";

type Props = {
  isDashboard?: boolean;
};

// Define type for analytics data
interface AnalyticsData {
  name: string;
  count: number;
}

const UserAnalytics = ({ isDashboard }: Props) => {
  const { data, isLoading } = useGetUsersAnalyticsQuery({});

  // const analyticsData = [
  //   { name: "Jan 2023", count: 440 },
  //   { name: "Feb 2023", count: 8200 },
  //   { name: "Mar 2023", count: 4033 },
  //   { name: "Apr 2023", count: 4502 },
  //   { name: "May 2023", count: 2042 },
  //   { name: "Jun 2023", count: 3454 },
  //   { name: "Jul 2023", count: 356 },
  //   { name: "Aug 2023", count: 5667 },
  //   { name: "Sept 2023", count: 1320 },
  //   { name: "Oct 2023", count: 6526 },
  //   { name: "Nov 2023", count: 5480 },
  //   { name: "Dec 2023", count: 485 },
  // ];

  const analyticsData: AnalyticsData[] = [];

  if (data) {
    data.users.last12Months.forEach(
      (item: { month: string; count: number }) => {
        console.log("item", item);
        analyticsData.push({ name: item.month, count: item.count });
      }
    );
  }

  console.log("data", analyticsData);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className={`${
            !isDashboard
              ? "mt-[50px]"
              : "mt-[50px] dark:bg-[#111C43]  shadow-sm pb-5 rounded-sm"
          }`}
        >
          <div className={`${isDashboard ? "!ml-8 mb-5" : ""}`}>
            <h1
              className={`${styles.title} ${
                isDashboard && "!text-[20px] "
              } px-5 !text-start`}
            >
              User Analytics
            </h1>
            {!isDashboard && (
              <p className={`${styles.label} px-5`}>Last 12 Months analytics</p>
            )}
          </div>

          <div
            className={`w-full ${
              isDashboard ? "h-[30vh]" : "h-screen"
            } flex items-center justify-center`}
          >
            <ResponsiveContainer
              width={isDashboard ? "100%" : "90%"}
              height={isDashboard ? "50%" : "100%"}
            >
              <AreaChart
                data={analyticsData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="#4d62d9"
                  fill="#4d62d9"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default UserAnalytics;
