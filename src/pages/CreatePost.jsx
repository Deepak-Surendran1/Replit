import './CreatePost.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { Card, FormField, Loader } from '../components';
export default function CreatePost() {
  const [prompt, setPrompt] = useState('')
  const [image, setImage] = useState()
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    setPrompt(e.target.value)
  }
  const handleGenerate = async () => {
    if (prompt) {
      try {
        setLoading(true)
        const response = await fetch('https://dalle-server.deepu2285.repl.co/api/v1/dalle', {
          method: "POST",

          // Adding body or contents to send
          body: JSON.stringify({
            prompt: prompt
          }),

          // Adding headers to the request
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        });
        console.log(response)
        const data = await response.json();
        console.log(data)
        setLoading(false)
        setImage(`data:image/jpeg;base64,${data.photo}`);


      } catch (error) {
        alert(error)
        setLoading(false)
      }
    } else {
      alert('enter prompt')
    }
  }
  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <input type='text' value={prompt} onChange={handleChange} />

        <div className='image'>
          {loading ? <Loader /> : <img src={image} alt='Result Image' />}
        </div>
        <button type='submit' onClick={handleGenerate}>Generate</button>
      </form>
    </>
  )
}