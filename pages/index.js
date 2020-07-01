import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import AriaItem from '../components/AriaItem'
import fetch from 'isomorphic-unfetch'
import qs from 'qs'


const Home = ({data}) => {
  const [ariaCollection, setAriaCollection] = useState(data || []);
  const [voiceFilter, setVoiceFilter] = useState("");
  const [fachFilter, setFachFilter] = useState("");
  const [styleFilter, setStyleFilter] = useState("");
  const [composerFilter, setComposerFilter] = useState("");

  // * simple debug logger; logs every time ariaCollection changes
  useEffect(() => {
    console.log({ariaCollection});
  }, [ariaCollection])

  // should happen with onClick
  const updateArias = React.useCallback(function(event) {
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
      })

      const response = await fetch(`http://localhost:3000/api/daily?${query}`)
      const data = await response.json();

      // * save data in state
      setAriaCollection(data);
    }

    // * call async function
    _getArias();
  },
  // * dependencies of the function above
    [
      voiceFilter,
      fachFilter,
      styleFilter,
      composerFilter,
    ]
  );

  const handleChangeVoice = React.useCallback((event) => {
    setVoiceFilter(event.target.value);
  }, [setVoiceFilter]);

  const handleChangeFach = React.useCallback((event) => {
    setFachFilter(event.target.value);
  }, [setFachFilter]);

  const handleChangeStyle = React.useCallback((event) => {
    setStyleFilter(event.target.value);
  }, [setStyleFilter]);

  const handleChangeComposer = React.useCallback((event) => {
    setComposerFilter(event.target.value);
  }, [setComposerFilter]);

  return (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
    </Head>

      <div className="flex text-center">
        <div className="w-full m-4">
          <h1 className="text-4xl">Aria Search Tool</h1>
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
                    <option value="Undefined">-------</option>
                    <option value="Soprano">Soprano</option>
                    <option value="tenor">Tenor</option>
                    <option value="mezzo">Mezzo</option>
                    <option value="bass">Bass</option>
                </select>
            </label>
          </form>
        </div>
        <div className="p-4">
        <form>
            <label className="block">
                Select Fach: &nbsp;
                <select onChange={handleChangeFach}>
                    <option value="Undefined">-------</option>
                    <option value="Lyric">Lyric</option>
                    <option value="Coloratura">Coloratura</option>
                    <option value="Dramatic">Dramatic</option>
                    <option value="Spinto">Spinto</option>
                </select>
            </label>
          </form>
        </div>
        <div className="p-4">
        <form>
            <label className="block">
                Select Style: &nbsp;
                <select onChange={handleChangeStyle}>
                    <option value="Undefined">-------</option>
                    <option value="Verismo">Verismo</option>
                    <option value="Bel Canto">Bel Canto</option>
                    <option value="Singspiel">Singspiel</option>
                    <option value="American">American</option>
                </select>
            </label>
          </form>
        </div>
        <div className="p-4">
        <form>
            <label className="block">
                Select Composer: &nbsp;
                <select onChange={handleChangeComposer}>
                    <option value="Undefined">-------</option>
                    <option value="mozart">Mozart</option>
                    <option value="puccini">Puccini</option>
                    <option value="verdi">Verdi</option>
                    <option value="bernstein">Bernstein</option>
                </select>
            </label>
            <br></br>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={updateArias}>
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
)}

const AriaItems = ({ariaCollection}) => ariaCollection.map((ariaInfo, index) => <AriaItem key={index} ariaInfo={ariaInfo} />)

// * loads unfiltered arias on initial page load
Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/daily')
  const json = await res.json()
  return {data: json}
}

export default Home
