import React from 'react'
import '../../App.css'
export default function List(props) {
    return (
        <div
            id='output'
            className='out'
        >
            
        {props.data && 
            <div className='listDiv'>
                <h1
                 className='listH1'
                 >
                 {'City: ' + props.data.name}
                 </h1>
                <h1 className='listH2'
                >
                {'Temp: ' + props.data.main.temp}
                </h1>
            </div>
        }
        </div>
    )
}
