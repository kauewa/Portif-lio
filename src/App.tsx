import styled from "styled-components";

const imgPerfil = require("./assets/perfil.png");

const Body = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.section`
  display: flex;
  width: 1100px;
  height: 600px;
  background-color: var(--escuro);
  margin: auto;
  border-radius: 2rem;


  @media (max-width: 850px) {
    flex-direction: column;
    width: 90%;
    height: auto;
  }
`;

const Imagem = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 2rem;

  @media (max-width: 850px) {
    width: 100%;
    height: 30%;
    border-radius: 2rem 2rem 0 0;
  }
`;

const Conteudo = styled.div`
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

const ImgBandeira = styled.img`
  width: 50px;
`;

const Botao = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100%;
  height: 50px;
  border-radius: 2rem;
  `;

const Cursos = styled(Botao)`
  background-color: var(--verde);
  color: var(--escuro);

  &:hover {
  box-shadow: 2px 2px 10px var(--verde), -2px -2px 10px var(--verde);
  }
`;

const Linkedin = styled(Botao)`
  background-color: #0e76a8;

  &:hover {
  box-shadow: 2px 2px 10px #0e76a8, -2px -2px 10px #0e76a8;
  }
`;

const Github = styled(Botao)`
  background-color: #000;

  &:hover {
  box-shadow: 2px 2px 10px #000, -2px -2px 10px #000;
  }
`;




function App() {
  return (
    <Body>
      <Main>
        <Imagem src={imgPerfil} alt="Imagem de perfil" />
        <Conteudo>
          <div>
            <ImgBandeira src="https://static.todamateria.com.br/upload/ba/nd/bandeiradobrasil-2-cke.jpg" />
            <h1>Full Stack Developer</h1>
            <p>wandscherkaue@gmail.com</p>
            <p>(49)991778172</p>
          </div>
          <div>
            <h1>Resumo profissional</h1>
            <p> Desenvolvedor com habilidades em React, Node, NestJS, SQL e NoSQL, além de conhecimento em Dart e Flutter. Orientado a objetos, capaz de criar soluções escaláveis e eficientes. Analítico e disposto a aprender. Sempre buscando atualização e aprimoramento.</p>
          </div>
          <Cursos href="https://cursos.alura.com.br/user/wandscherkaue/fullCertificate/d855b3610aa3db0de2f8c1aecd3958dd" target="_blank">Cursos</Cursos>
          <Linkedin href="https://www.linkedin.com/in/kau%C3%AA-wandscher-5590b1229/" target="_blank">Linkedin</Linkedin>
          <Github href="https://github.com/kauewa" target="_blank">Github</Github>


        </Conteudo>
      </Main>
    </Body>
  );
}

export default App;


