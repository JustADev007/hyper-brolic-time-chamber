"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const questions = [
  {
    question: "What workout split would you like?",
    answer1: "Fullbody",
    answer2: "Push,Pull,Legs",
    answer3: "Upper/Lower",
    answer4: "Bro",
  },
  {
    question: "What type of training would you like to focus on?",
    answer1: "Strength",
    answer2: "Hypertrophy",
    answer3: "Power",
    answer4: "Endurance",
  },

  {
    question: "What muscle group would you like to emphasize?",
    answer1: "Chest",
    answer2: "Legs",
    answer3: "Back",
    answer4: "Arms",
  },
];

export default function Page() {
  const { username } = useParams();
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [arr, setArr] = useState([]);
  const [userArr, setUserArr] = useState({ username });
  console.log(username);
  const increase = async (e: any) => {
    e.preventDefault();
    if (index === 1) {
      setUserArr((prevState) => ({ ...prevState, intensity: e.target.value }));
      console.log(userArr);
    }
    if (index === 2) {
      console.log(userArr);
      await axios.post("/api/test", userArr);
      router.push(`/`);
      router.refresh();
    }
    if (arr.length === 0) {
      const stack = e.target.value;
      setUserArr({ username, stack });
      setArr([e.target.value]);

      console.log("here", e.target.value);
    } else {
      setArr((oldValue) => [...oldValue, e.target.value]);
    }
    setIndex(index + 1);
    console.log(arr);
  };

  return (
    <>
      <section className="bg-my-queen-black sm:h-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Image
            src="/hyperbrolic-tc-logo-transparent.svg"
            alt="logo"
            width={300}
            height={300}
          />
          <div className="w-full bg-my-queen-gray rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {questions[index]?.question}
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <input
                  onClick={(e) => increase(e)}
                  type="button"
                  value={questions[index]?.answer1}
                  className="w-full text-white bg-primary-600 hover:text-gray-900 hover:bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                />
                {/*
{questions[index]?.answer1}
                </input>

                  */}
                <input
                  onClick={(e) => increase(e)}
                  type="button"
                  className="w-full text-white bg-primary-600 hover:text-gray-900 hover:bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  value={questions[index]?.answer2}
                />
                <input
                  onClick={(e) => increase(e)}
                  type="button"
                  className="w-full text-white bg-primary-600 hover:text-gray-900 hover:bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  value={questions[index]?.answer3}
                />
                <input
                  onClick={(e) => increase(e)}
                  type="button"
                  className="w-full text-white bg-primary-600 hover:text-gray-900 hover:bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  value={questions[index]?.answer4}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
