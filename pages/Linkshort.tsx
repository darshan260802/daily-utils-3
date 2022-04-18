import React from 'react'
import { shortLink } from '../API/linkshort'

const Linkshort = () => {
  const short = async() => {
    await shortLink("https://www.google.com");
  }
  return (
    <>
    <div>Linkshort</div>
    <button onClick={short} >Test</button>
    </>
  )
}

export default Linkshort