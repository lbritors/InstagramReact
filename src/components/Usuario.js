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
      <img onClick ={mudaFoto} src={foto} alt="imagem de perfil"/>
        <div className="texto">
          <span>
            <strong>{nome}</strong>
             <ion-icon onClick={clicou} name="pencil"></ion-icon>
          </span>
       </div>
    </div>
    )
}

// function FotoUsuario() {
//   return (

//   )
// }