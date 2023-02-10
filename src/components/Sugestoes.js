export default function Sugestoes() {
    
  const sugestao = [
    {imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats"}, 
    {imagem:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes.svg"},
    {imagem: "assets/img/chibirdart.svg", nome: "chibirdart"},
    {imagem: "assets/img/razoesparaacreditar.svg" , nome: "razoesparaacreditar"},
    {imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals"},
  ]
  
  
  return (
      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {sugestao.map((sg) => <Sugestao imagem={sg.imagem} nome={sg.nome}/>)}
      </div>
    )
}

function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.imagem} alt={props.nome}/>
        <div className="texto">
          <div className="nome">{props.nome}</div>
          <div className="razao">Segue você</div>
        </div>
      </div>
      <div className="seguir">Seguir</div>
    </div>
  )
}