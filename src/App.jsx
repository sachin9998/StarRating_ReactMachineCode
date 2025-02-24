import { useState } from "react";
import "./App.css";

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="app">
      <p>Star Rating: </p>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((num, index) => {
          return (
            <span
              className={num <= (hover || rating) ? "star selected" : "star"}
              onClick={() => setRating(num)}
              onMouseOver={() => setHover(num)}
              onMouseLeave={() => setHover(0)}
              key={index}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      Rating Count: {rating}
    </div>
  );
}

export default App;
