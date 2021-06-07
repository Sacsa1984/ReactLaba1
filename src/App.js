import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";


function MyButton(props) {
  const handlerClick = () => {
    props.onClickAct(props.Value);
  };
  return (
    <button
      
      onClick={handlerClick}
    >
      {props.Value}
    </button>
  );
}

function MyDisplayBlock(props) {

  return (
    <div >
      {props.Value}
    </div>
  );
}

function App() {
  const [displayCValue, setDisplayCValue] = useState(0);
  const stateFunc = newCValue => {setDisplayCValue( displayCValue + newCValue)};
  let MyZna=3;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        < MyFunc>  </MyFunc>
     <MyProza> </MyProza>

     <div>
       <MyButton Value={10} text="10" onClickAct={stateFunc} />
       <MyButton Value={-100} text="-100" onClickAct={stateFunc} />
       <MyButton Value={25} text="25" onClickAct={stateFunc} />
       <MyDisplayBlock Value={displayCValue} />
    </div>
      </header>
    </div>
  );
}




 function MyFunc() { 
  return (
  <div className="MyFunc">
  <h1>Уи́льям Шекспи́р (англ. William Shakespeare[2], английское произношение: 
    [ˌwɪljəm ˈʃeɪkspɪə(r)]; 26 апреля 1564 года (крещение)[⇨],
     Стратфорд-апон-Эйвон, Англия — 23 апреля (3 мая) 1616[⇨], там же)
    </h1>
  
  </div>
  );
 }

 

 function MyProza()
 {return (<div>

<p>Good frend for Iesvs sake forbeare,</p>
<p>To digg the dvst encloased heare.</p>
<p>Bleste be ye man yt spares thes stones,</p>
<p>And cvrst be he yt moves my bones.	»</p>
<p>«	Друг, ради Господа, не рой</p>
<p>Останков, взятых сей землёй;</p>
<p>Нетронувший блажен в веках,</p>
<p>И проклят — тронувший мой прах.</p>
<p>(Перевод А. Величанского)[11]</p>
 </div>)



}

export default App;
