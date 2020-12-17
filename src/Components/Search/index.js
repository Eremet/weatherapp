
import React, {useState} from 'react'

export default function Search(props) {
    const [value, setValue] = useState('')
    const getValueOnInput=event =>{
        event.preventDefault()
        props.searchByName(value)
        setValue('')
        
    }
    return (
        <div>
            <form onSubmit={getValueOnInput}>
                <input 
                    type='text'
                    value={value}
                    id='country'
                    name='search'
                    placeholder='Search..'
                    onChange={
                        (event)=>{
                    setValue(event.target.value)

                }
            }
                />
                <button
                
                    className='btn draw-border'
                >Get weather!</button>
            </form>
        </div>
    )
}
