
function Hero(props) {
    return (
        <div className="App">
            <img src={props.url} />
            <div className="hero-name">{props.name}</div>
            <div className="hero-universe">{props.universe}</div>
        </div>
    );
}

export default Hero;