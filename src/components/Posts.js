export default function Posts() {
    
    const post = [
      {imagemUsuario:"assets/img/adorable_animals.svg", nomeUsuario: "adorable_animals", imagemConteudo:"assets/img/IMG_20190924_145258.jpg", nomeConteudo:"yorkshire", imagemCurtidas:"assets/img/barked.svg", nomeCurtidas:"barked"},
      {imagemUsuario:"assets/img/meowed.svg", nomeUsuario:"meowed", imagemConteudo:"assets/img/gato-telefone.svg", nomeConteudo:"gato-telefone", imagemCurtidas: "assets/img/respondeai.svg", nomeCurtidas: "respondeai"},
      {imagemUsuario:"assets/img/barked.svg", nomeUsuario:"barked", imagemConteudo:"assets/img/dog.svg", nomeConteudo:"dog" , imagemCurtidas: "assets/img/adorable_animals.svg", nomeCurtidas: "adorable_animals"}
    ]
    
    return (
        <div className="posts">
         {post.map((p) => <Post imagemUsuario={p.imagemUsuario} nomeUsuario={p.nomeUsuario} imagemConteudo={p.imagemConteudo} nomeConteudo={p.nomeConteudo} imagemCurtidas={p.imagemCurtidas} nomeCurtidas={p.nomeCurtidas}/>)}       
        </div>
     
    )
}

function Post(props) {
  console.log(props);
  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.imagemUsuario} alt={props.nomeUsuario}/>
          {props.nomeUsuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={props.imagemConteudo} alt={props.nomeConteudo}/>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.imagemCurtidas} alt={props.nomeCurtidas}/>
          <div className="texto">
            Curtido por <strong>{props.nomeCurtidas}</strong> e <strong>outras 101.523 pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}