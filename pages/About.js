import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const About = () => (
    <div>
        <Head>
            <title>About</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
        </Head>

        <Nav />

        <div className="container mx-auto text-center">
            <h1 className="text-6x1 m-12">Aria Search Tool</h1>
            <p className="text-x1">This app will help you find arias that fit your needs.</p>
        </div>
    </div>
);

export default About;
