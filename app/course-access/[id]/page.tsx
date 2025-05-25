"use client";

import { useParams } from "next/navigation";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import Loader from "@/app/components/Loader/Loader";
import CourseContent from "../../components/Course/CourseContent";

const Page = () => {
  const params = useParams(); // Fetch route params in client components
  const id = params?.id;
  const { isLoading, error, data } = useLoadUserQuery(undefined, {});
  console.log("DATA", data);

  useEffect(() => {
    if (data) {
      const isPurchased = data.user.courses.find(
        (item: any) => item.courseId == id
      );
      console.log("PURCHASED");
      if (!isPurchased) {
        console.log("NOT PURCHASED");
        redirect("/");
      }
      if (error) {
        redirect("/");
      }
    }
  }, [data, error]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <CourseContent id={id} user={data?.user} />
        </div>
      )}
    </>
  );
};

export default Page;
