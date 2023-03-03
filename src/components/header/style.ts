import styled from "styled-components";

export const HeaderStyle = styled.nav`
  background-color: grey;
  height: 60px;

  .conteinerHeader{
    display:flex;
    justify-content:space-between ;
    margin-left:15px;
    margin-right:15px;
    padding-top:10px ;
  }

  img{
    border-radius:100%;
    height:40px;
    width:40px;
    cursor: pointer; 
  }

  .logo{
    font-size:26px ;
    cursor: pointer;
  }

  /* section {
    margin: 0;
    display: flex;
    flex-direction: row;
    width: 100%;

    overflow-x: scroll;
    margin-top: 3rem;

    div {
      margin-right: 1rem;
      margin-left: 1rem;
    }
  } */
  
`;
