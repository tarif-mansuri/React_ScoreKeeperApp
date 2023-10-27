let score = 0;
let wickets = 0;

const oneRun = (event)=>{
    if(wickets<10){
        score += parseInt(event.target.innerText);
    }
    rootElement.render(<App />);
}

const oneWicket = (event)=>{
    if(wickets<10){
        wickets += 1;
    }
    rootElement.render(<App />);
}


const App = ()=>{
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
            {/* Inline Function */}
            <button onClick={()=>oneWicket(1)}>Wicket</button>
        </div>
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);