import { CardStyle } from "./style";
// import { useHistory } from "react-router-dom";

function Cards({dados, setDados, page}:any): any {

  let teste = dados.slice(page,page+3)

  if(teste.length <3){
    setDados(0)
  }

  return teste.map((produto: any, index: any) => (
    <CardStyle key={index}>
      <img src={produto.imagenPrincipal} alt="" />
      <br />
      {produto.generos.map((genero: any, indexGeneros: string) => (
        <div key={indexGeneros}>
          <span className="boxGeneros">{genero} </span>
        </div>
      ))}
    </CardStyle>
  ));
}

export default Cards;
