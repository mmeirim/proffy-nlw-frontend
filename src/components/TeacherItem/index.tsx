import React from'react';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/51498095?s=460&u=308b14fe87e927d9175a822bafa187648641518e&v=4" alt="Matheus Meirim" />
                <div>
                    <strong>Matheus Meirim</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
            Matheus Meirim foi um astrônomo, alquimista, filósofo natural, teólogo e cientista inglês, mais reconhecido como físico e matemático. 
            <br/><br/>
            Sua obra, Princípios Matemáticos da Filosofia Natural é considerada uma das mais influentes na história da ciência
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>
                        R$80,00
                    </strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Wathsapp"></img>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;