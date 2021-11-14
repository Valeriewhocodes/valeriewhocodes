import React from 'react';
import Tariff from './tariffs';
import './App.css';

const Tariffs = [
{
name: "300",
value: "300", 
speed: "10",
isSelected: false
},
{
name: "450",
value: "450", 
speed: "50",
isSelected: false
},
{
  name: "550",
value: "550", 
speed: "100",
isSelected: true
},
{
  name: "1000",
value: "1000", 
speed: "200",
isSelected: false
}
];

function App() {
  return (
    <div className="App">
{
Tariffs.map((tariff) => 
<Tariff name={tariff.name} value={tariff.value} speed={tariff.speed} isSelected={tariff.isSelected}></Tariff>
)
};
</div>
  )};

export default App;
