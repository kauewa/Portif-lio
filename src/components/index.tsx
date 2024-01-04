import styled from "styled-components";

export const imgPerfil = require("../assets/perfil.png");
export const imgGitHub = require("../assets/github.png");
export const imgIn = require("../assets/in.png")
export const imgTecnologias = require("../assets/tecnologias.png")
export const imgCoding1 = require("../assets/coding1.png")
export const imgCoding2 = require("../assets/coding2.png")
export const imgCoding3 = require("../assets/coding3.png")
export const imgWpp = require("../assets/wpp.png")

export const Body = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.section`
  display: flex;
  width: 1000px;
  height: 500px;
  background-color: var(--escuro);
  margin: auto;
  border-radius: 2rem;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  animation: aparecer 2s ease-in-out;
  

  @media (max-width: 850px) {
    flex-direction: column;
    width: 90%;
    height: auto;
  }
`;

export const Box = styled(Main)`
  height: 200px;
  margin-top: 40px;
`

export const IconTencologias = styled.img`
width: 200px;
height: 50px;
`;

export const Redes = styled.div`
position: fixed;
display: flex;
bottom: 0;
right: 0;
animation: aparecer 1s ease-in-out;
`;

export const Icon = styled.img`
width: 50px;
height: 50px;
margin-right: 10px;
transition: transform 0.1s ease-in-out;

&:hover {
  transform: scale(1.1);
}

`;

export const Imagem = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 2rem;

  @media (max-width: 850px) {
    width: 100%;
    height: 30%;
    border-radius: 2rem 2rem 0 0;
  }
`;

export const Conteudo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;

  @media (max-width: 850px) {
    width: 100%;
    height: 50%;
    padding: 1rem;
  }
`;

export const ImgBandeira = styled.img`
  width: 50px;
`;

export const Botao = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
  height: 70px;
  border-radius: 1rem;
  margin-top: 5px;
  background-color: var(--vermelho);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);

  &:hover {
    background-color: var(--vermelho-2);
    }
  `;

export const Cursos = styled(Botao)`
  background-color: var(--verde-2);
  color: white;

  &:hover {
  background-color: var(--verde);
  }
`;



