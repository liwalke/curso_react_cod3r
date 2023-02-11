import React from "react"
import alunos from '../../Data/alunos'

const ListaAlunos = props => {
    const alunosItens = alunos.map( aluno => 
        <li key={aluno.id}>
            {aluno.id}) {aluno.nome} - {aluno.nota}
        </li>
    )

    return (
        <div>
            <ul>
                {alunosItens}
            </ul>
        </div>
    )
}

export default ListaAlunos