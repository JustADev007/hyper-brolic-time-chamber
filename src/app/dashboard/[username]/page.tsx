"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

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
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex justify-center">
        <h1 className="text-2xl">Hello {username}</h1>
      </div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Schedule
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
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
              <div className="flex flex-col items-center">
                {program[`Day ${index}`]?.map((each: any) => {
                  return (
                    <>
                      <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        {each.exercise_name}
                      </h3>
                      <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        {`${each.sets} x ${each.reps}`}
                      </p>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
