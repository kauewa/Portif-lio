import { Link } from "react-router-dom";
import { Body, Main, Imagem, imgPerfil, Conteudo, ImgBandeira, Cursos, Botao, Icon, imgTecnologias, IconTencologias, imgGitHub, imgIn, Redes, imgWpp, Box } from "../components";

function Home() {
  return (
    <Body>
      <ImgBandeira src="https://static.todamateria.com.br/upload/ba/nd/bandeiradobrasil-2-cke.jpg" />
      <Main>
        <Imagem src={imgPerfil} alt="Imagem de perfil" />
        <Conteudo>

          <div>
            <IconTencologias src={imgTecnologias} />

            <h1>Full Stack Developer</h1>
            <p>wandscherkaue@gmail.com</p>
            <p>(49)991778172</p>
          </div>
          <div>
            <h1>Resumo profissional</h1>
            <p>  Sou uma pessoa curiosa e gosto de aprender sobre uma variedade de assuntos. Foi por isso que escolhi seguir carreira na área tecnológica, já que ela é fundamental em todas as outras áreas profissionais.

              Minhas principal habilidade é em Python. Também sei fazer sites com React e Node, criar APIs e trabalhar com bancos de dados usando SQL e NoSQL. Com tudo isso, estou pronto para encarar desafios no mundo da tecnologia.</p>
          </div>
          <Cursos href="https://cursos.alura.com.br/user/wandscherkaue/fullCertificate/d855b3610aa3db0de2f8c1aecd3958dd" target="_blank">Cursos</Cursos>
        </Conteudo>
      </Main>
      <Redes>
        <a href="https://github.com/kauewa" target="_blank">
          <Icon src={imgGitHub} />
        </a>
        <a href="https://www.linkedin.com/in/kau%C3%AA-wandscher-5590b1229/" target="_blank">
          <Icon src={imgIn} />
        </a>
        <a href="https://wa.me/5549991778172" target="_blank">
          <Icon src={imgWpp} />
        </a>
      </Redes>
    </Body>
  );
}

export default Home;