"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const questions = [
  {
    question: "What muscle group would you like to focus",
    answer1: " Chest",
    answer2: "Legs",
    answer3: "Back",
    answer4: "Arms",
  },
  {
    question: "How many days a week?",
    answer1: " 1-2",
    answer2: "3-4",
    answer3: "5",
    answer4: "6",
  },
  {
    question: "Question 3",
    answer1: " Answer1",
    answer2: "Answer2",
    answer3: "Answer3",
    answer4: "Answer4",
  },
  {
    question: "Question 4",
    answer1: " Answer1",
    answer2: "Answer2",
    answer3: "Answer3",
    answer4: "Answer4",
  },
];

export default function Page() {
  const { username } = useParams();
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [arr, setArr] = useState([]);
  const userArr = { username };
  console.log(username);
  const increase = async (e) => {
    e.preventDefault();
    if (index === 3) {
      await axios.post("http://localhost:3000/api/test", userArr);
    }
    if (index === 4) {
      router.push(`/`);
      router.refresh();
    }
    if (arr.length === 0) {
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
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            HyperBrolic TC
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
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
