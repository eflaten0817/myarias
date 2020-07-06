import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";

const About = () => (
    <div>
        <Head>
            <title>About</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
        </Head>

        <Navbar />

        <div className="container mx-auto text-center">
            <h1 className="text-6x1 m-12">Aria Search Tool</h1>
            <p className="text-x1">This app will help you find arias that fit your needs.</p>
            <br></br>
            <p className="text-x1">There are other aria databases available on the internet, some of which have thousands of arias and a high amount of information for each entry. MyArias.com is not meant to compete with information in these databases, but to provide an easy to use, modern, and mobile friendly web service to quickly find arias. </p>
            <br></br>
            <p className="text-x1">The creator of this web page worked for many years as an accompanist for opera singers. One of the most frequent needs a client would seek is needing a new aria. It was commonplace to hear statements such as “I need a new Mozart aria,” or “my French aria is not working, what do you think?” The idea for this website came to be from the intent of thinking, “I should be able to pull out my phone and quickly look up arias to match these singers.” </p>
            <h1 className="text-6x1 m-12">About the Creator</h1>
            <p className="text-x1">Erik Flaten is a musician and software engineer with a passion for both classical music and technology. Erik’s blended career in both music and technology include music directing the National Tour of Cabaret, conducting an Off-Broadway show, working as Choir Coordinator for Hugh Jackman’s world tour, and holding a Software Engineering position at Lockheed Martin. Flaten received his MM in Piano Performance from San Francisco State University and his MS in Computer Science from West Chester University. </p>
            <h1 className="text-6x1 m-12">Contributors</h1>
            <p className="text-x1">This service would have been impossible without the help of Eric Ogden and Jennifer Woods, two highly experienced, skilled, and talented software developers. These friends provided the encouragement, troubleshooting, and expert advice in order to bring this project to the web. </p>
        </div>
    </div>
);

export default About;
