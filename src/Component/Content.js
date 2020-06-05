import React from 'react'
import './css/belajar_styles.css'
function Content(props){
    let sayIt = ''
    let idElement = ''
    if(props.kebenaran){
        sayIt = 'boo'
        idElement = 'props'
    }
    return(
        <div className='Content'>
            <h3>Threshold</h3>
            <p id={idElement}>{sayIt}</p>
        </div>
    )
}
export default Content