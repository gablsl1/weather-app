import { useState } from 'react';

import { PiMagnifyingGlassLight } from 'react-icons/pi';

import Card from './components/Card';
import fetchData from './services/api';

import styles from './App.module.css';

const App = () => {
    const [search, setSearch] = useState('');
    const [city, setCity] = useState('');
    const [flag, setFlag] = useState('');
    const [temperature, setTemperature] = useState('');
    const [icon, setIcon] = useState('');
    const [weather, setWeather] = useState('');
    const [humidity, setHumidity] = useState('');
    const [wind, setWind] = useState('');
    const [showCard, setShowCard] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetchData(search).then((res) => {
            setCity(res.name);
            setFlag(res.sys.country);
            setTemperature(res.main.temp);
            setIcon(res.weather);
            setWeather(res.weather);
            setHumidity(res.main.humidity);
            setWind(res.wind.speed);
        });

        setShowCard(true);
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className={styles.app}>
            <div className={styles.weather_app}>
                <div className={styles.form}>
                    <h3>Check the weather in your city: </h3>
                    <div className={styles.input_container}>
                        <input
                            type='text'
                            placeholder='Enter city'
                            onChange={handleChange}
                        />
                        <button>
                            <PiMagnifyingGlassLight onClick={handleSubmit} />
                        </button>
                    </div>
                </div>
                {showCard && (
                    <Card
                        city={city}
                        flag={flag}
                        temperature={temperature}
                        icon={icon}
                        weather={weather}
                        humidity={humidity}
                        wind={wind}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
