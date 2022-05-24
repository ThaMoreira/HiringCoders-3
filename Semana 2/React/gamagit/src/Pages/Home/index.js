import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import * as S from "./styled";

function Home(props) {
  const [erro, setErro] = useState (false);
  const [usuario, setUsuario] = useState ('');
  let navigate = useNavigate();
  const handleNavigate = () => {
  navigate("/repositories");
  }

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
      repositoriesName.push(repository.name);
      })
      localStorage.setItem("repositoriesName", JSON.stringify(repositoriesName));
      handleNavigate();
      })
      .catch (erro =>{
      setErro(true);
      })
      }

  return (
        <S.HomeContainer>
    <S.Content>
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Content>
    {erro ? <S.ErrorMsg> Ocorreu um erro, tente novamente! </S.ErrorMsg> : '' }
</S.HomeContainer>

  );
}

export default Home;


