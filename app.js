let score = 0;
let wickets = 0;

const oneRun = (event)=>{
    score += parseInt(event.target.innerText);
}

const oneWicket = (event)=>{
    wickets += 1;
}


const App = ()=>{
    rootElement.render(<App />);
    return <>
        <h1>SCORE KEEPER</h1>
        <h2>SCORE: {score}/{wickets}</h2>
        <div>
            <button onClick={oneRun}>1</button>
            <button onClick={oneRun}>2</button>
            <button onClick={oneRun}>3</button>
            <button onClick={oneRun}>4</button>
            <button onClick={oneRun}>5</button>
            <button onClick={oneRun}>6</button>
            <button onClick={()=>oneWicket(1)}>Wicket</button>
        </div>
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);