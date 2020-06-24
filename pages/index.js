import React, {useState, useEffect} from 'react'
import Head from 'next/head'
//import MCTForm from '../components/mctform';
//import Result from '../components/result';

const Home = ({data}) => {

  //Do I need this:
  let Aria = {
    _id: String,
    Voice : String,
    Title: String,
    Opera: String,
    Composer: String,
    Style: String,
    Fach: String,
    RangeLow: String,
    RangeHigh: String,

  }

  const getArias = async () => {
    const res = await fetch('http://localhost:3000/api/daily')
    const json = await res.json()
    return {data: json}
    //Need to figure out what to do next:
      //how do I take json recieved from fetch and display it for user?
  }

  const getAriasFilterVoice = async () => {
    const res = await fetch('http://localhost:3000/api/daily' + filters[0])
    const json = await res.json()
  }

  const filters = ["","","",""];
    const handleChangeVoice = (event) => {
       let voice =  event.target.value;
       filters[0] = voice;
    }
    const handleChangeFach = (event) => {
        let fach =  event.target.value;
        filters[1] = fach;
    }
    const handleChangeStyle = (event) => {
        let style =  event.target.value;
        filters[2] = style;
    }
    const handleChangeComposer = (event) => {
        let composer =  event.target.value;
        filters[3] = composer;
    }
    const getFilters = async () => {
        let voiceFilter = filters[0]
        const res = await fetch(`http://localhost:3000/api/daily?voiceFilter=${filters[0]}`)
        const json = await res.json()
        //console.log(json) //THIS IS UNDEFINED GDI
        event.preventDefault();
    }

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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getArias}>
              Find My Arias
          </button>
          </form>
          </div>
        </div>
        </div>
      </div>      
  </div>
)}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/daily')
  const json = await res.json()
  return {data: json}
}
export default Home