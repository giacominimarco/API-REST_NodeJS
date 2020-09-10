import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";
export default function Navigation() {
    return (
        <Container>
            <div className='header'>
                <div className='button'>
                    <Link to="/">
                        Cadastrar medico
                    </Link>
                </div>
            </div>
        </Container>
    );
}
