import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";

const Submit = () => (
    <div>
        <Head>
            <title>About</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
        </Head>

        <Navbar />

        <div className="container mx-auto text-center">
            <h1 className="text-6x1 m-12">Request to add aria to database</h1>
            <p className="text-x1">Coming soon: Here you can submit an aria you wish
                                    to add to the database.</p>
        </div>
    </div>
);

export default Submit;