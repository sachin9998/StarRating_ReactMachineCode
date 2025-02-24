# Star Rating - React.js Machine Code

<div align="center">
  <img src="https://github.com/user-attachments/assets/63c9e102-9252-499a-9ae2-16c8fdc1e4f5"/>  
</div>


**Logic:**

- On the basis of `rating` and hover state will set selected class for the current span.
- **`className={num <= (hover || rating) ? "star selected" : "star"}`**

- **App.jsx**

```java
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
              **className={num <= (hover || rating) ? "star selected" : "star"}
              onClick={() => setRating(num)}
              onMouseOver={() => setHover(num)}
              onMouseLeave={() => setHover(0)}**
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
```

- App.css

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;
  gap: 30px;

  justify-content: center;
  align-items: center;

  margin-top: 20px;
  font-size: 25px;
}

.star {
  color: gray;
  cursor: pointer;
  transition: all 0.2s ease;
}

.selected {
  color: gold;
  cursor: pointer;
}

```
