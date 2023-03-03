import Cards from "../components/cards";
import Header from "../components/header";
import { HomeStyle } from "./style";

import api from "../components/api";

import { dadosParaTeste } from "../dados/dados";

import { useEffect,useState } from 'react';

function Home() {

  const [arr, setArr] = useState([]);

  useEffect(() => {

    api
    .get("http://localhost:3000/users")
    .then((response) => setArr(response.data))
    
    .catch((err) => {
      // alert("ocoreu um erro");
      console.error("ops!" + err);
    });
    
  },[]);

  console.log(arr)

    const [contator, setContator] = useState(0);

    function addContados(){
        setContator(contator + 1)
        // if(contator >= dadosParaTeste.length){
        //     setContator(0)
        //     return 0
        // }
    }

    function subContados(){
        setContator(contator - 1)
        if(contator === 0 ){
            setContator(dadosParaTeste.length /3 - 1)
            return 0
        }
    }

  return (
    <HomeStyle>
      <Header></Header>
      <section className="conteinerCardsHome">
        <div className="conteinerBotao">
          <button onClick={()=>{subContados()}}>&#60;</button>
        </div>
          <Cards setDados= {setContator} page = {contator*3} dados={dadosParaTeste}></Cards>
        <div className="conteinerBotao">
          <button onClick={()=>{addContados()}}>&#62;</button>
        </div>
      </section>
    </HomeStyle>
  );
}

export default Home;
