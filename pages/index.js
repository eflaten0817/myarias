import React, { useState, useEffect } from "react";
import Head from "next/head";
import AriaItem from "../components/AriaItem";
import fetch from "isomorphic-unfetch";
import qs from "qs";
import Navbar from '../components/navbar'

const AriaItems = ({ ariaCollection }) =>
    ariaCollection.map((ariaInfo, index) => <AriaItem key={index} ariaInfo={ariaInfo} />);

const Home = ({ data }) => {
    const baseUrl = process.env.VERCEL_URL;

    const [ariaCollection, setAriaCollection] = useState(data || []);
    const [voiceFilter, setVoiceFilter] = useState("");
    const [fachFilter, setFachFilter] = useState("");
    const [styleFilter, setStyleFilter] = useState("");
    const [composerFilter, setComposerFilter] = useState("");
    const [languageFilter, setLanguageFilter] = useState("");

    // * simple debug logger; logs every time ariaCollection changes
    useEffect(() => {
        console.log({ ariaCollection });
    }, [ariaCollection]);

    // should happen with onClick
    const updateArias = React.useCallback(
        
        function (event) {
            event.preventDefault();

            // * define async function for getting data and saving it to the state
            async function _getArias() {
                // * get query string for the current filter state
                // * qs.stringify returns a properly formatted query string for the request
                const query = qs.stringify({
                    voiceFilter,
                    fachFilter,
                    styleFilter,
                    composerFilter,
                    languageFilter,
                });

                const response = await fetch(`https://${baseUrl}/api/daily?${query}`);
                const data = await response.json();

                // * save data in state
                setAriaCollection(data);
            }

            // * call async function
            _getArias();
        },
        // * dependencies of the function above
        [voiceFilter, fachFilter, styleFilter, composerFilter, languageFilter]
    );

    const handleChangeVoice = React.useCallback(
        (event) => {
            setVoiceFilter(event.target.value);
        },
        [setVoiceFilter]
    );

    const handleChangeFach = React.useCallback(
        (event) => {
            setFachFilter(event.target.value);
        },
        [setFachFilter]
    );

    const handleChangeStyle = React.useCallback(
        (event) => {
            setStyleFilter(event.target.value);
        },
        [setStyleFilter]
    );

    const handleChangeComposer = React.useCallback(
        (event) => {
            setComposerFilter(event.target.value);
        },
        [setComposerFilter]
    );

    const handleChangeLanguage = React.useCallback(
        (event) => {
            setLanguageFilter(event.target.value);
        },
        [setLanguageFilter]
    );

    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
            </Head>
            <Navbar />
            <div className="flex text-center">
                <div className="w-full m-4">
                    <h1 className="text-4xl">My Arias</h1>
                    <h3>All Fields Optional</h3>
                </div>
            </div>
            <div className="flex text-center">
                <div className="w-full m-4">
                    <div className="w-full m-4">
                        <div className="p-4">
                            <form>
                                <label className="block">
                                    Select Voice Type: &nbsp;
                                    <select onChange={handleChangeVoice}>
                                        <option value="">-------</option>
                                        <option value="Soprano">Soprano</option>
                                        <option value="Tenor">Tenor</option>
                                        <option value="Mezzo">Mezzo</option>
                                        <option value="Baritone">Baritone</option>
                                        <option value="Bass">Bass</option>
                                    </select>
                                </label>
                            </form>
                        </div>
                        <div className="p-4">
                            <form>
                                <label className="block">
                                    Select Language: &nbsp;
                                    <select onChange={handleChangeLanguage}>
                                        <option value="">-------</option>
                                        <option value="Italian">Italian</option>
                                        <option value="German">German</option>
                                        <option value="French">French</option>
                                        <option value="English">English</option>
                                        <option value="Russian">Russian</option>
                                    </select>
                                </label>
                            </form>
                        </div>
                        <div className="p-4">
                            <form>
                                <label className="block">
                                    Select Fach: &nbsp;
                                    <select onChange={handleChangeFach}>
                                        <option value="">----------------</option>
                                        <option value="Lyric">Lyric</option>
                                        <option value="Full Lyric">Full Lyric</option>
                                        <option value="Lyric Coloratura">Lyric Coloratura</option>
                                        <option value="Dramatic">Dramatic</option>
                                        <option value="Dramatic Coloratura">Dramatic Coloratura</option>
                                        <option value="Contralto">Contralto</option>
                                        <option value="Spinto">Spinto</option>
                                        <option value="Soubrette">Soubrette</option>
                                        <option value="Leggiero">Leggiero</option>
                                        <option value="Bass-Baritone">Bass-Baritone</option>
                                        <option value="Buffo">Buffo</option>
                                    </select>
                                </label>
                            </form>
                        </div>
                        <div className="p-4">
                            <form>
                                <label className="block">
                                    Select Style: &nbsp;
                                    <select onChange={handleChangeStyle}>
                                        <option value="">-----------------------</option>
                                        <option value="Verismo">Verismo</option>
                                        <option value="Bel Canto">Bel Canto</option>
                                        <option value="Classical">Classical</option>
                                        <option value="Singspiel">Singspiel</option>
                                        <option value="20th-Century American">20th Century American</option>
                                        <option value="20th-Century English">20th Century English</option>
                                        <option value="20th-Century Italian">20th Century Italian</option>
                                        <option value="20th-Century German">20th Century German</option>
                                        <option value="French Romantic">French Romantic</option>
                                        <option value="Italian Romantic">Italian Romantic</option>
                                        <option value="German Romantic">German Romantic</option>
                                        <option value="Russian Romantic">German Romantic</option>
                                        <option value="Italian Baroque">Italian Baroque</option>
                                        <option value="Viennese Operetta">Viennese Operetta</option>
                                        <option value="French Operetta">French Operetta</option>
                                        <option value="Czech Nationalistic">Czech Nationalistic</option>
                                        <option value="Russian Nationalistic">Russian Nationalistic</option>
                                    </select>
                                </label>
                            </form>
                        </div>
                        <div className="p-4">
                            <form>
                                <label className="block">
                                    Select Composer: &nbsp;
                                    <select onChange={handleChangeComposer}>
                                        <option value="">------------------</option>
                                        <option value="Mozart">Mozart</option>
                                        <option value="Puccini">Puccini</option>
                                        <option value="Verdi">Verdi</option>
                                        <option value="Wagner">Wagner</option>
                                        <option value="Adamo">Adamo</option>
                                        <option value="Barber">Barber</option>
                                        <option value="Bernstein">Bernstein</option>
                                        <option value="Bolcom">Bolcom</option>
                                        <option value="Saint-Saës">Saint-Saës</option>
                                        <option value="Beethoven">Beethoven</option>
                                        <option value="Beeson">Beeson</option>
                                        <option value="Bellini">Bellini</option>
                                        <option value="Berlioz">Berlioz</option>
                                        <option value="Bizet">Bizet</option>
                                        <option value="Blitzstein">Blitzstein</option>
                                        <option value="Cavalli">Cavalli</option>
                                        <option value="Cilea">Cilea</option>
                                        <option value="Catalani">Catalani</option>
                                        <option value="Corigliano">Corigliano</option>
                                        <option value="Delibes">Delibes</option>
                                        <option value="Donizetti">Donizetti</option>
                                        <option value="Flotow">Flotow</option>
                                        <option value="Giordano">Giordano</option>
                                        <option value="Gluck">Gluck</option>
                                        <option value="Halévy">Halévy</option>
                                        <option value="Handel">Handel</option>
                                        <option value="Hoiby">Hoiby</option>
                                        <option value="Humperdinck">Humperdinck</option>
                                        <option value="Korngold">Korngold</option>
                                        <option value="J Strauss">Strauss, Johann</option>
                                        <option value="R Strauss">Strauss, Richard</option>
                                        <option value="Lehár">Lehár</option>
                                        <option value="Leoncavallo">Leoncavallo</option>
                                        <option value="Mascagni">Mascagni</option>
                                        <option value="Massenet">Massenet</option>
                                        <option value="Mechem">Mechem</option>
                                        <option value="Meyerbeer">Meyerbeer</option>
                                        <option value="Menotti">Menotti</option>
                                        <option value="Moore">Moore</option>
                                        <option value="Monteverdi">Monteverdi</option>
                                        <option value="Musorgsky">Musorgsky</option>
                                        <option value="Nicolai">Nicolai</option>
                                        <option value="Offenbach">Offenbach</option>
                                        <option value="Lalo">Lalo</option>
                                        <option value="Previn">Previn</option>
                                        <option value="Penhorwood">Penhorwood</option>
                                        <option value="Purcell">Purcell</option>
                                        <option value="Rossini">Rossini</option>
                                        <option value="Sheng">Sheng</option>
                                        <option value="Smetana">Smetana</option>
                                        <option value="Sondheim">Sondheim</option>
                                        <option value="Schuman">Schuman, William</option>
                                        <option value="Stravinsky">Stravinsky</option>
                                        <option value="Tippett">Tippett</option>
                                        <option value="Thomas">Thomas</option>
                                        <option value="Thomson">Thomson</option>
                                        <option value="Tchaikovsky">Tchaikovsky</option>
                                        <option value="Weber">Weber</option>
                                        <option value="Weill">Weill</option>
                                        <option value="Ward">Ward</option>
                                    </select>
                                </label>
                                <br></br>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={updateArias}
                                >
                                    Find My Arias
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex text-center">
                <div className="w-full m-4">
                    <h2>Filtered Arias</h2>
                    <AriaItems ariaCollection={ariaCollection} />
                </div>
            </div>
        </div>
    );
};

// * loads unfiltered arias on initial page load

const baseUrl = process.env.VERCEL_URL;
Home.getInitialProps = async () => {
    const baseUrl = process.env.VERCEL_URL;
    console.log(baseUrl);
    const res = await fetch(`https://${baseUrl}/api/daily`);
    const json = await res.json();
    return { data: json };
};


export default Home;
