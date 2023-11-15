This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Project Title

---Answer---
Hyper Brolic Time Chamber

## Overview

What is your app? Brief description in a couple of sentences.
---Answer---
A cost effective fitness application that provides users with a specific fitness & nutrition program that fits their individual goals and needs.

### Problem

Why is your app needed? Background information around any pain points or other reasons.
---Answer---
Afforable, customizable, and specific fitness plans are hard to come by and always in need. Through this app the user will get access to a quality health and fitness plan that will be fully individualized for them specificly while also being at a price point they can afford.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.
---Answer---
Fitness enthusiast and persons looking to improve their health. They will use it on their computer or phone by logging in daily to see their fitness plan. The app will take into account physical and medical limitations.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.
---Amswer---
The user will be able to create an account and then select a fitness plan that they would like to purchase. Then they will go through a series of questions that will customize a workout and nutrition regime for them to follow. There will be an area for them to track their daily macros and see their workouts in a weekly calander.

## Implementation

---Answer---
Creating a full functioning web application that can do all of the above!

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.
---Answer---
Next.js, Tailwind, MySQL, Typescript

### APIs

List any external sources of data that will be used in your app.
---Answer---
I will be making my own fitness database as well as using the openAI api

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.
---Answer---
Login page - Allows users to login
Membership prices page- Shows the prices of the different tiers of monthly memberships
Account creation page - Stores users information and gets information to make workout plan
User Home page - Where they imput macros and see their workout for the week
Monthly Calander page - WHere they see the data that they input from the month

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.
---Answer---
Still looking and working on this

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.
---Answer---
The database will have several tables containing different exerices. The tables will be horizontal pull, vertical pull, horizontal push, vertical push, squat, hinge. They will be connected by muscle group ie, push, pull, legs/ upper, lower. Each exerices will have a tier to sort order of importance.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.
---Answer---
Still working on all of the endpoints

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.
---Answer---
Yes it will include a login. Still working on how it will be implemented.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.
---Answer---
Sprint 1 - Auth with the login and account creation
Sprint 2 - Membership cards along with the workout creation
Sprint 3 - Making workout data persist along with the calander page

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.
---Answer---
User interactability - You can add friends who can commit on your previous workouts
Avatar - a custom made avatar that would keep you motivated to use the app daily
Fitness Meetup - A section that friends would be able to make events to meet and do fitness activities in real life
