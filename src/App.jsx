import React from "react"
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import RandomNumber from "./components/basicos/Random"
import Card from "./components/layout/Card"
import Familia from "./components/basicos/Familia"
import ListaAlunos from "./components/repetição/ListaAlunos"
import TabelaProdutos from "./components/repetição/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Uncontrolled from "./components/form/Uncontrolled"
import Controlled from "./components/form/Controlled"

const App = _ => (
    <div className="App">
        <h1>REACT FUNDAMENTALS</h1>
        <div className="Cards">
            <Card titulo="Primeiros" color="#080">
                <div>
                    <h2>Olá Mundo!</h2>
                </div>
                <Primeiro />
            </Card>
            <Card titulo="Desafio Aleatório" color="#9565B2">
                <RandomNumber min={1} max={60} />
                <RandomNumber min={1} max={60} />
                <RandomNumber min={1} max={60} />
                <RandomNumber min={1} max={60} />
                <RandomNumber min={1} max={60} />
                <RandomNumber min={1} max={60} />
            </Card>
            <Card titulo="Componentes Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira"/>
            </Card>
            <Card titulo="Repetição" color="#FF4C65">
                <ListaAlunos/>
            </Card>
            <Card titulo="Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos/>
            </Card>
            <Card titulo="Par ou Impar" color="#00e050">
                <ParOuImpar numero={20}/>
                <ParOuImpar numero={21}/>
                <ParOuImpar numero={1}/>
                <ParOuImpar numero={2}/>
            </Card>
            <Card titulo="Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="Controlled and Uncontrolled Components" color="#0BA932">
                <Uncontrolled></Uncontrolled>
                <Controlled></Controlled>
            </Card>
        </div>
    </div>
)

export default App