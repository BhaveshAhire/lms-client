import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";

type Props = {};

const Hero: FC<Props> = () => {
  const { data, isLoading } = useGetHeroDataQuery("Banner", {});
  const [search, setSearch] = useState("");
  const router = useRouter();

  // async function fetchData() {
  //   try {
  //     const response = await fetch(
  //       "https://lms-he50.onrender.com/api/v1/get-courses",
  //       {
  //         method: "GET",
  //         credentials: "include",
  //       }
  //     );
  //     const data = await response.json();
  //     console.log("DATA RESPONSE", data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleSearch = () => {
    if (search === "") {
      return;
    } else {
      router.push(`/courses?title=${search}`);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full 1000px:flex items-center">
          <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[500px] 1100px:w-[500px] h-[50vh] w-[50vw]  rounded-[50%] 1100px:left-[18rem] 1500px:left-[21rem]"></div>
          <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
            <Image
              src={data?.layout?.banner?.image?.url}
              width={400}
              height={400}
              alt=""
              className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
            />
          </div>
          <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px] ">
            <h2
              className="dark:text-white text-black resize-none text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[60px] 1500px:text-[70px] font-[600] 
  leading-[1.2] text-right bg-transparent outline-none focus:ring-0 focus:outline-none"
              // className="dark:text-white text-black resize-none text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[60px] 1500px:text-[70px] font-[600]"
            >
              {data?.layout?.banner?.title}
            </h2>
            <br />
            <p
              className="dark:text-[#edfff4] text-[#000000ac] font-josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]"
              //className="dark:text-[#edfff4] text-[#000000ac] font-josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[70%] bg-transparent"
            >
              {data?.layout?.banner?.subTitle}
            </p>
            <br />
            <br />
            <div className="1500px:w-[55%] 1100px:w-[78%] w-[78%] h-[50px] bg-tranparent relative dark:text-white text-black">
              <input
                type="search"
                placeholder="Search Courses....."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none "
              />
              <div
                className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]"
                onClick={handleSearch}
              >
                <BiSearch className="text-white" size={30} />
              </div>
            </div>
            <br />
            <br />
            <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
              <Image
                src={data?.layout?.banner?.image?.url}
                width={50}
                height={50}
                alt=""
                className="rounded-full"
              />
              <Image
                src={data?.layout?.banner?.image?.url}
                width={50}
                height={50}
                alt=""
                className="rounded-full ml-[-20px]"
              />
              <Image
                src={data?.layout?.banner?.image?.url}
                width={50}
                height={50}
                alt=""
                className="rounded-full  ml-[-20px]"
              />
              <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
                500K+ People already trusted us.{" "}
                <Link
                  href="/courses"
                  className="dark:text-[#46e256] text-[crimson]"
                >
                  View Course
                </Link>
              </p>
            </div>
            <br />
          </div>
        </div>
      )}
    </>
  );
  // return (
  //   <div className="w-full bg-[#0a0a0a] dark:bg-black flex items-center justify-center py-16 px-5">
  //     <div className="flex flex-col-reverse 1000px:flex-row items-center w-full max-w-[1200px]">
  //       {/* Left - Hero Illustration */}
  //       <div className="w-full 1000px:w-1/2 flex justify-center">
  //         <Image
  //           src="/banner-img-1.jpg" // Replace with a relevant illustration
  //           alt="Online learning illustration"
  //           width={500}
  //           height={500}
  //           priority
  //           className="object-contain"
  //         />
  //       </div>

  //       {/* Right - Text & Search */}
  //       <div className="w-full 1000px:w-1/2 flex flex-col items-center 1000px:items-start text-center 1000px:text-left">
  //         <h2 className="text-white dark:text-white text-[40px] sm:text-[55px] font-bold font-Josefin leading-tight">
  //           Improve Your Online <br /> Learning Experience <br /> Better
  //           Instantly
  //         </h2>

  //         <p className="text-[#b0b0b0] dark:text-[#d1d1d1] text-[18px] max-w-[500px] mt-4">
  //           We have <strong>40k+ Online courses</strong> &{" "}
  //           <strong>500k+ Online registered students</strong>. Find your desired
  //           courses now.
  //         </p>

  //         {/* Search Bar */}
  //         <div className="w-full max-w-[400px] flex items-center mt-6 bg-[#1e1e1e] dark:bg-[#333] rounded-md overflow-hidden">
  //           <input
  //             type="search"
  //             placeholder="Search Courses..."
  //             aria-label="Search for courses"
  //             className="bg-transparent p-3 w-full outline-none text-white placeholder-white dark:text-gray-300"
  //           />
  //           <button className="flex items-center justify-center w-[50px] h-[50px] bg-[#39c1f3] dark:bg-[#0fa5d5]">
  //             <BiSearch className="text-white" size={24} />
  //           </button>
  //         </div>

  //         {/* Student Trust Section */}
  //         <div className="flex items-center gap-4 mt-6">
  //           {[1, 2].map((_, index) => (
  //             <Image
  //               key={index}
  //               src="/banner-img-1.jpg"
  //               alt={`User ${index + 1}`}
  //               width={40}
  //               height={40}
  //               className="rounded-full border border-white dark:border-gray-300"
  //             />
  //           ))}
  //           <p className="text-white dark:text-gray-200 text-[18px] font-semibold">
  //             500K+ People already trusted us.✨{" "}
  //             <Link
  //               href="/courses"
  //               className="text-[#39c1f3] dark:text-[#0fa5d5] underline"
  //             >
  //               View Courses
  //             </Link>
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Hero;
