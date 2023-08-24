import { PiMapPinDuotone } from 'react-icons/pi';
import { WiCelsius, WiRaindrop, WiWindy } from 'react-icons/wi';

import onu from '../assets/onu.png';

import styles from './Card.module.css';

const Card = ({ city, flag, temperature, icon, weather, humidity, wind }) => {
    return (
        <div className={`${styles.weather_data}`}>
            <h2>
                <PiMapPinDuotone />
                <span className='city'>{city}</span>
                <img
                    src={`https://flagsapi.com/${flag}/flat/32.png`}
                    alt='country-flag'
                />
            </h2>

            <p className={styles.weather}>
                <span>{temperature}</span>
                <WiCelsius />
            </p>
            <div className={styles.description_container}>
                <p>
                    <p>{weather[0] ? weather[0].description : ''}</p>
                    <img
                        src={
                            icon[0]
                                ? `http://openweathermap.org/img/wn/${icon[0].icon}.png`
                                : 'http://openweathermap.org/img/wn/01d.png'
                        }
                        alt='weather condition'
                    />
                </p>
            </div>

            <div className={styles.details_container}>
                <p className={styles.humidity}>
                    <WiRaindrop />
                    <span>{humidity}</span>
                </p>
                <p className={styles.wind}>
                    <WiWindy />
                    <span>{wind}</span>
                </p>
            </div>
        </div>
    );
};

export default Card;
