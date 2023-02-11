import { useState } from "react"


export default function Posts() {
  
    const post = [
      {imagemUsuario:"assets/img/adorable_animals.svg", nomeUsuario: "adorable_animals", imagemConteudo:"assets/img/IMG_20190924_145258.jpg", nomeConteudo:"yorkshire", imagemCurtidas:"assets/img/barked.svg", nomeCurtidas:"barked"},
      {imagemUsuario:"assets/img/meowed.svg", nomeUsuario:"meowed", imagemConteudo:"assets/img/gato-telefone.svg", nomeConteudo:"gato-telefone", imagemCurtidas: "assets/img/respondeai.svg", nomeCurtidas: "respondeai"},
      {imagemUsuario:"assets/img/barked.svg", nomeUsuario:"barked", imagemConteudo:"assets/img/dog.svg", nomeConteudo:"dog" , imagemCurtidas: "assets/img/adorable_animals.svg", nomeCurtidas: "adorable_animals"}
    ]
    
    return (
        <div className="posts">
         {post.map((p) => <Post key={p.nomeConteudo} imagemUsuario={p.imagemUsuario} nomeUsuario={p.nomeUsuario} imagemConteudo={p.imagemConteudo} nomeConteudo={p.nomeConteudo} imagemCurtidas={p.imagemCurtidas} nomeCurtidas={p.nomeCurtidas}/>)}       
        </div>
     
    )
}

function Post(props) {
  const [salvo, setSalvo] = useState("bookmark-outline");  
  const [like, setLike] = useState("heart-outline");
  const [numeroCurtidas, setNumeroCurtidas] = useState(10000);
  const [cor, setCor] = useState("white");

  function deuLike() {
    if(like === "heart-outline"){
      setLike("heart")
      setNumeroCurtidas(numeroCurtidas + 1);
      setCor("vermelho");
    }else {
      setLike("heart-outline")
      setNumeroCurtidas(numeroCurtidas -1);
      setCor("white");
    }
  }
  function likeImagem() {
    if(like ==="heart-outline"){
      setLike("heart");
      setNumeroCurtidas(numeroCurtidas + 1)
      setCor("vermelho");
;    }
  }

  function salvar() {
    if(salvo === "bookmark-outline") {
      setSalvo("bookmark");
    } else {
      setSalvo("bookmark-outline");
    }
  }



  console.log(props);
  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.imagemUsuario} alt={props.nomeUsuario}/>
          {props.nomeUsuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={props.imagemConteudo} alt={props.nomeConteudo} onClick={likeImagem}/>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon class={cor} onClick={deuLike} name={like}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon  onClick={salvar} name={salvo}></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.imagemCurtidas} alt={props.nomeCurtidas}/>
          <div className="texto">
            Curtido por <strong>{props.nomeCurtidas}</strong> e <strong>outras {numeroCurtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}