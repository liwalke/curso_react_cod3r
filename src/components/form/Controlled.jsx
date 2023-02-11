import React, { useState } from "react"

const Controlled = props => {
    const [inputTextCont, setInputTextCont] = useState('')
    function hadleSubmit(e){
        e.preventDefault()
        console.log(inputTextCont)
    }
    return (
        <div>
            <input
                type="text"
                placeholder="Controlled"
                value={inputTextCont}
                onChange={e => setInputTextCont(e.target.value)}>
            </input>
            <button onClick={hadleSubmit}>Submit Controlled</button>
        </div>
    )
}

export default Controlled