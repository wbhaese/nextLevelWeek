import React from 'react';

interface HeaderProps{
    title: string;//Para declarar como não obrigatório, precisa colocar interrogação: title?: string
}

//transformamos a function em constante. Facilita a recepção de dados

//fc é um tipo genérico que pode receber parâmetros
//Precisaremos também declarar uma interface, com o nome HeaderProps

const Header: React.FC<HeaderProps> = (props) => {//O componente sempre precisa de letra maiúcula para não conflitar com o código
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;