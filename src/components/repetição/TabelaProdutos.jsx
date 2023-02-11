import React from "react"
import produtos from "../../Data/produtos"
import './TabelaProdutos.css'

const TabelaProdutos = props => {
    const total = produtos
        .reduce((acc, prod) => acc += prod.preco, 0)
        .toFixed(2)
        .replace('.', ',')

    const tableRows = produtos.map((produto, i) => {
        return (
            <tr className={i % 2 === 0? 'par' : 'impar'} key={produto.id}>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (
        <div className="products-table">
            <table>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total:</td>
                    <td>R$ {total}</td>
                </tr>
            </tfoot>
        </table>
        </div>
    )
}

export default TabelaProdutos 