import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container } from "./style";
import Efect from "../../efect";

export default function HeaderSignUp() {
    return (
        <Container>
            <h1>Cadastro</h1>
            <h2>Fixa de cadastro</h2>
            
            <div className="buttons">
                <button onClick={Efect}>Quero me cadastrar</button>
                <h5>Já fez seu cadastro? Faça seu login agora!</h5>
                <Link to={`/userlist`}>
                    <FiLogIn style={{ marginRight: 8 }} />
                    Entrar!
                </Link>
            </div>
        </Container>
    );
}
