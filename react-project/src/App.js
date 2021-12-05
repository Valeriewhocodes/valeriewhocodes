import React, { useState } from "react";

import "./App.scss";
import Header from "./components/header/header";
import Card from "./components/card/card";
import Footer from "./components/footer/footer";

const cards = [
  {
    id: "10847",
    english: "butterfly",
    transcription: "[ ˈbʌtəflaɪ ]",
    russian: "бабочка",
    tags: "животные",
  },
  {
    id: "10848",
    english: "hedgehog",
    transcription: "[ˈhedʒhɔːɡ]",
    russian: "ёжик",
    tags: "Array",
  },
  {
    id: "10853",
    english: "apple",
    transcription: "[ˈæpl]",
    russian: "яблоко",
    tags: "Array",
  },
  {
    id: "10854",
    english: "pear",
    transcription: "[peə]",
    russian: "груша",
    tags: "Array",
  },
  {
    id: "10867",
    english: "plum",
    transcription: "[plʌm]",
    russian: "слива",
    tags: "Array",
  },
  {
    id: "10872",
    english: "unicorn",
    transcription: "[ˈyo͞onəˌkôrn]",
    russian: "единорог",
    tags: "Array",
  },
];

function App() {
  const [indexArray, setIndexArray] = useState(0);

  const slideRight = () => {
    if (indexArray < cards.length - 1) {
      setIndexArray(indexArray + 1);
    }
  };

  const slideLeft = () => {
    if (indexArray > 0) {
      setIndexArray(indexArray - 1);
    }
  };

  return (
    <div className="App">
      <Header className="header-area"></Header>
      <div className="main-area">
        <button className="arrow-img-area" onClick={slideLeft}>
          <img
            className="arrow-img"
            src="https://cdn-icons-png.flaticon.com/512/54/54321.png"
            alt="previous"
          />
        </button>
        <Card
          english={cards[indexArray].english}
          transcription={cards[indexArray].transcription}
          russian={cards[indexArray].russian}
        ></Card>
        <button className="arrow-img-area" onClick={slideRight}>
          <img
            className="arrow-img"
            src="https://cdn-icons-png.flaticon.com/512/54/54833.png"
            alt="next"
          />
        </button>
        <div className="cards-count">{indexArray + 1 + "/" + cards.length}</div>
      </div>
      <Footer className="footer-area"></Footer>
    </div>
  );
}

export default App;
