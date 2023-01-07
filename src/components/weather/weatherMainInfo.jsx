import { useState } from "react";
import styles from "./weatherMainInfo.module.css";

export default function WeatherMainInfo({ weather }) {
  const [temperature, setTemperature] = useState(false);

  const handleClick = () => {
    setTemperature(!temperature);
  };

  return (
    <div className={weather?.current?.temp_c > 20 ? styles.warm : styles.cold}>
      <div className={styles.city}>{weather?.location?.name}</div>
      <div className={styles.country}>{weather?.location?.country}</div>
      <div className={styles.row}>
        <div>
          <img
            src={`http:${weather?.current?.condition?.icon}`}
            width="70"
            style={{ marginTop: "15px" }}
          />
        </div>
        <div className={styles.weatherConditions}>
          <div className={styles.condition}>
            {weather?.current?.condition.text}
          </div>
          <div className={styles.current}>
            {temperature
              ? weather?.current?.temp_f + "°F"
              : weather?.current?.temp_c + "°C"}
          </div>
        </div>
      </div>
      <div className={styles.change} onClick={handleClick}>
        {temperature ? "°C" : "°F"}
      </div>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather.location.lon}5!3d${weather.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
        width="100%"
        height="200"
        style={{ border: 0, opacity: ".4" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className={styles.weatherExtras}>
        <div className={styles.weatherExtrasItem}>
          <h2>Humidity</h2>
          <i class="fa-solid fa-temperature-three-quarters"></i>
          <div>{weather?.current?.humidity} g/m³</div>
        </div>

        <div className={styles.weatherExtrasItem}>
          <h2>Wind</h2>
          <i class="fa-solid fa-wind"></i>
          <div>{weather?.current?.wind_kph} km/h</div>
        </div>

        <div className={styles.weatherExtrasItem}>
          <h2>Cloudy</h2>
          <i class="fa-solid fa-cloud"></i>
          <div>{weather?.current?.cloud}%</div>
        </div>
      </div>
    </div>
  );
}
