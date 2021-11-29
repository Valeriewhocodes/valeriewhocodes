import React from "react";
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
  return (
    <div className="App">
      <Header></Header>
      <div className="main-area">
        {cards.map((card) => (
          <Card
            english={card.english}
            transcription={card.transcription}
            russian={card.russian}
          ></Card>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
