"use client";

import { useParams } from "next/navigation";
import CourseDetailsPage from "../../components/Course/CourseDetailsPage";

const Page = () => {
  const params = useParams(); // Fetch route params in client components
   const id = params?.id as string;

  return (
    <div>
      <CourseDetailsPage id={id} />
    </div>
  );
};

export default Page;
