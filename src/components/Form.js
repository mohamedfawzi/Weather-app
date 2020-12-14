import React from 'react'
//import Geonames from 'geonames.js'

export default function Form(props) {

    return (
        <form className='col-start-1 col-end-7' onSubmit={props.getWeather}>
            <input className='w-full mb-5 rounded-md h-10 bg-transparent border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent' type='text' name='country' placeholder='Country ...' />
            <input className='w-full mb-5 rounded-md h-10 bg-transparent border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent' type='text' name='city' placeholder='City ...' />
            <button className='inline-block rounded-md p-3 bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50' type='submit'>Get Weather</button>
        </form>
    )
}

