import { useState } from "react";

import styles from "./weatherForm.module.css";
import "./weatherFormStyle.css";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!city || city !== "") {
      onChangeCity(city);
    }
  }

  return (
    <form class="containerInput" onSubmit={handleSubmit}>
      <input
        value={city}
        onChange={handleChange}
        placeholder="Enter a city"
        type="text"
      />
    </form>
  );
}

// <form onSubmit={handleSubmit} className={styles.container}>
// <input
//   className={styles.input}
//   type="text"
//   value={city}
//   onChange={handleChange}
// />
// </form>

{
  /* <div onSubmit={handleSubmit} className="wave-group">
<input
  className="input"
  required=""
  type="text"
  value={city}
  onChange={handleChange}
/>
<span className="bar"></span>
<label className="label">
  <span className="label-char" style="--index: 0">
    N
  </span>
  <span className="label-char" style="--index: 1">
    a
  </span>
  <span className="label-char" style="--index: 2">
    m
  </span>
  <span className="label-char" style="--index: 3">
    e
  </span>
</label>
</div> */
}
