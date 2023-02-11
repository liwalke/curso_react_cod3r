import React from "react"
import DiretaFilho from "./DiretaFilho"

const DiretaPai = props => {
    return (
        <div>
            <DiretaFilho nome="Juca" idade={20} ehNerd={true}></DiretaFilho>
        </div>
    )
}

export default DiretaPai