import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import AriaItem from '../components/AriaItem'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr';


const fetcher = (...args) => fetch(...args).then(res => res.json())

function useData() {
  const {data, error} = useSWR('/api/daily', fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
    hasError: Boolean(error)
  }
}

const Home = () => {
  const {data, error} = useSWR('/api/daily', fetcher);

  if (error) {
    return <div>failed to load</div>
  }

  if (!data) {
    return <div>loading...</div>
  }

  console.log({data, error})

  return (
    <>
      <button onClick={}>Refresh Data</button>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
  )
}

// Home.getInitialProps = async () => {
//   const res = await fetch('http://localhost:3000/api/daily')
//   const json = await res.json()
//   return {data: json}
// }

let testData = {
  _id: String,
  Voice : "Sorpano",
  Title: "Si, mi chiamano Mimi",
  Opera: "La Boheme",
  Composer: "Puccini",
  style: "Verismo",
  fach: String,
  rangeLow: String,
  rangeHigh: String,

}
export default Home
