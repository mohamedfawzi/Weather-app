import React, { Component } from 'react';
import Form from './components/Form'
import Weather from './components/Weather'
import Geonames from 'geonames.js'

const API_KEY = 'b274f5d825c7c64c7703656c1e501f0d';
class App extends Component {
  state = {
    tempreature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: '',
    countries: []
  }
  componentDidUpdate() {
    const geonames = Geonames({
      username: 'mohamedfawzi',
      lan: 'en',
      encoding: 'JSON'
    });
    console.log(geonames)
  }
  //get weather 
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`)
    const data = await api.json();
    if (city && country) {
      this.setState({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        tempreature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please Enter Data ...'
      })
    }
  }
  render() {
    return (
      <div className='col-start-5 col-end-9 col-span-4 h-auto p-4 bg-gray-600 rounded-md flex items-center justify-center text-white text-2xl font-extrabold'>
        <section className='grid grid-cols-6'>
          <Form getWeather={this.getWeather} />
          <Weather
            tempreature={this.state.tempreature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </section>
      </div>
    );
  }
}

export default App