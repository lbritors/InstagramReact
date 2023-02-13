import { useState } from "react"

export default function Usuario() {
  const fotoInicial = "assets/img/catanacomics.svg";
  let [nome, setNome] = useState("catanacomics")  
  let [foto, setFoto] = useState(fotoInicial);
  
  function mudaFoto() {
    foto = prompt("Insira sua foto:");
    if(foto !== undefined && foto!== null && foto !== ""){
      setFoto(foto);
    }
  }
  
  function clicou() {
    nome = prompt("Qual é o seu nome?");
    if(nome !== undefined && nome !== null && nome !== "") {
      setNome(nome);
    }
  }
  
  return (
    <div className="usuario">
      <img  data-test="profile-image" onClick ={mudaFoto} src={foto} alt="imagem de perfil"/>
        <div className="texto">
          <span>
            <UserName nome={nome}/>
            <ion-icon data-test="edit-name" onClick={clicou} name="pencil"></ion-icon>
          </span>
       </div>
    </div>
    )
}

function UserName(props) {
  console.log(props);
  return (
   <>
    <strong data-test="name">{props.nome}</strong>
   </>  
  )
}