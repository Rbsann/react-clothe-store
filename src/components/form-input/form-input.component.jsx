import React from 'react'
import './form-input.styles.scss'

const FormInput = ({handleChange,label,...props})=> (
    <div>
        <input className='form-input' onChange={handleChange} {...props}/>
        {
            label?
            (<label className={`${props.value.length ? 'shrink':''}`}></label>):null
        }
    </div>
)

export default FormInput