import React from 'react'
import '../style/myStyle.css'

function MyStyleSheet(props) {

    let className = props.primary?'primary':''
    return (
        <div>
            <h1 className={`${className} font-xl`} >Himank</h1>
        </div>
    )
}

export default MyStyleSheet
