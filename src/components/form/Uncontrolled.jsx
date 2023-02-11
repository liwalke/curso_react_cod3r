import React, { useRef } from "react"

const Uncontrolled = props => {
    const inputRef = useRef(null)
    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputRef.current.value)
    }

    return (
        <div>
            <input type="text" placeholder="Uncontrolled" ref={inputRef}/>
            <button onClick={handleSubmit}>Submit Uncontrolled</button>
        </div>
    )
}

export default Uncontrolled