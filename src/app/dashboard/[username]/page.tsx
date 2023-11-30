"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalVideo from "@/app/components/Modal/Modal";

function groupByDay(d: any) {
  return d.reduce((result: any, exercise: any) => {
    const { day } = exercise;

    if (!result[day]) {
      result[day] = [];
    }

    result[day].push(exercise);

    return result;
  }, {});
}

export default function DashboardPage() {
  const router = useRouter();
  const [program, setProgram] = useState([]);
  const [index, setIndex] = useState(1);
  const { username } = useParams();
  console.log(username);
  const arr = { username };
  const increaseDays = () => {
    setIndex((oldIndex: number) => oldIndex + 1);
  };
  const decreaseDays = () => {
    setIndex((oldIndex: number) => oldIndex - 1);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.post(`/api/${username}`, arr);
      const day1 = groupByDay(response.data.user);

      console.log(day1[`Day ${index}`]);
      console.log(response.data.user);
      setProgram(day1);
    };
    getData();
  }, []);

  return (
    <section className="bg-my-queen-black sm:h-full ">
      <div className="flex flex-row justify-between items-center">
        <Image
          src="/hyperbrolic-tc-logo-transparent.svg"
          alt="logo"
          width={250}
          height={250}
        />
        <div className="w-1/4">
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut();
              router.push(`/`);
              router.refresh();
            }}
            className="bg-white text-black rounded-full px-6 py-2"
          >
            {" "}
            Logout
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-6 sm:h-full py-8 mx-auto md:h-full lg:py-0">
        <div className="flex flex-row justify-between items-center mb-8">
          <div className="w-1/2 flex justify-center items-center h-full ">
            <div className="h-24 w-24  rounded-full bg-gradient-to-r from-purple-700 via-red-600 to-yellow-500 flex justify-center items-center">
              <div className="h-[5.5rem] w-[5.5rem] rounded-full  bg-gray-100"></div>
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl">Welcome, {username}</h1>
            <p>Motivation gets you going. Discipline keeps you growing</p>
          </div>
        </div>

        <div className="w-full bg-my-queen-gray rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex justify-between items-center">
              <div>
                <button onClick={decreaseDays}>{"<"}</button>
                <button onClick={increaseDays}>{">"}</button>
              </div>

              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {`Day ${index}`}
              </h1>
            </div>

            <div className="space-y-4 md:space-y-6 flex flex-col">
              {program[`Day ${index}`]?.map((each: any) => {
                console.log(each.video);
                return (
                  <>
                    <div className="flex flex-col items-center bg-white mb-2 rounded-lg py-2">
                      <h3 className="block mb-2 text-sm font-medium text-black">
                        {each.exercise_name}
                      </h3>
                      <p className="block mb-2 text-sm font-medium text-black">
                        {`Sets: ${each.sets}`}
                      </p>
                      <p className="block mb-2 text-sm font-medium text-black">
                        {`Reps: ${each.reps}`}
                      </p>
                      {/*

                      <ModalVideo />
                      <iframe
                        src="https://www.youtube.com/embed/eGo4IYlbE5g"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                      />{" "}
*/}{" "}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
