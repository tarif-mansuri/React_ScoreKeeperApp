let score = 0;
let wickets = 0;
let ballWiseScore = [];
let hit = 0;
let inputRef = React.createRef();

const makeDelivery = (num)=>{
    hit  = num;
    rootElement.render(<>
                        <App />
    </>);
}

const wicketOut = (s)=>{
    hit = s;
    rootElement.render(<>
        <App />
</>);
   
}

function eventHandeler(event){
    event.preventDefault();
   if(wickets<10){
        ballWiseScore.unshift(
            // <span>{hit}{", "}{inputRef.current.value}</span>
            <span>{`${hit} , ${inputRef.current.value}`}</span>
        );
        if(hit==='W'){
            wickets++
        }else{
            score+=hit;
        }
   }else{

   }
    rootElement.render(<App />);
}

const MyForm = ()=>{
    return<>
        <form onSubmit = {eventHandeler}>
            <input value={hit}/>
            <input ref={inputRef}/>
            <button>Submit</button>
        </form>
    </>
}

const ScoreButtons = ()=>{
    return <>
            <div>
                <button onClick={()=>makeDelivery(0)}>0</button>
                <button onClick={()=>makeDelivery(1)}>1</button>
                <button onClick={()=>makeDelivery(2)}>2</button>
                <button onClick={()=>makeDelivery(3)}>3</button>
                <button onClick={()=>makeDelivery(4)}>4</button>
                <button onClick={()=>makeDelivery(5)}>5</button>
                <button onClick={()=>makeDelivery(6)}>6</button>
                {/* Inline Function */}
                <button onClick={()=>wicketOut('W')}>Wicket</button>
            </div>
        </>
}

const App = ()=>{
    return <>
        <br/>
        <hr/>
        <h1>SCORE KEEPER</h1>
        <h2>SCORE: {score}/{wickets}</h2>
        <ScoreButtons/>
        <br/>
        <MyForm/>
        <hr/>
        {ballWiseScore.map(
            (ele, ind)=>{
                return <p key={ind}>{ele}</p>
            }
        )}
    </>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);