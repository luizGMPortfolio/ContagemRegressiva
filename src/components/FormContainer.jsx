import { useState } from "react";
import Title from "./Title";
import "./FormContainer.css";


const FormContainer = ({setTitulo, setData, setImage, setColor, setForm}) => {

    function ComeçarContagem(e) {
        setForm("pronto")
    }



    return (
        <div className="Container">
            <Title title={"Monte a sua contagem regressiva!"} />
            <form>
                <label htmlFor="titulo" name="titulo">Titulo:</label>
                <input type="text" placeholder="Digite o titulo do evento" onChange={(e) => setTitulo(e.target.value)} />
                <label htmlFor="">Data do evento:</label>
                <input type="date" placeholder="mm/dd/yyyy" onChange={(e) => setData(e.target.value)} />
                <label htmlFor="image">Imagem:</label>
                <input type="url" placeholder="insira a URL da imagem" onChange={(e) => setImage(e.target.value)} />
                <label htmlFor="color">Color do tema:</label>
                <input type="color" className="cl" onChange={(e) => setColor(e.target.value)} />
                <button className="bt" onClick={ComeçarContagem}>Criar</button>
            </form>
        </div>

    )
}

export default FormContainer;