import styled from "styled-components";

export const imgPerfil = require("../assets/perfil.png");

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
  width: 1200px;
  height: 600px;
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
  height: 50px;
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

export const Linkedin = styled(Botao)`
  background-color: rgba(14, 118, 168, 0.4);

  &:hover {
    background-color: rgba(14, 118, 168, 1);
  }
`;

export const Github = styled(Botao)`
  background-color: rgba(0, 0, 0, 0.4);

  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }
`;