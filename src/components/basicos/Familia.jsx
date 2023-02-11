import React from "react"
import FamiliaMembro from "./FamiliaMembro"

const Familia = props => {
    return (
        <div>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>   {/* Atribuição dinâmica da propriedade sobrenome do componente Familia para o FamiliaMembro */}
            <FamiliaMembro nome="Ana" { ...props }/>                    {/* O spreas operator está repassando todas props do "pai" para o "filho", tipo Herança */}
            <FamiliaMembro nome="Gustavo"/>                             {/* Não existe herança por padrão no React, neste caso, este componente ficará sem sobrenome */}
            <FamiliaMembro nome="Juca" sobrenome="Ferreira"/>           {/* Atribuição explícita */}
        </div>
    )
}

export default Familia