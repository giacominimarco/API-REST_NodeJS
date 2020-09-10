import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container } from "./style";
import Form from "../../components/Form";

export default function HeaderSignUp() {
    return (
        <Container>
            <h1>Cadastro</h1>
            <h2>Ficha de cadastro</h2>
            <div className="buttons">
                <h5>Entre e confira os médicos já cadastrados!</h5>
                <Link to={`/doctorlist`}>
                    <FiLogIn style={{ marginRight: 8 }} />
                    Entrar!
                </Link>
            </div>
        </Container>
    );
}
