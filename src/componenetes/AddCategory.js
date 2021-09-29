import React, {useState} from 'react'
import { Fragment } from 'react'
import PropType from "prop-types";


export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim('') !== ''){
            setCategories(cats => [inputValue,...cats]);
            setinputValue('')
        }else{
            console.log('no se puede introducir')
        }
    }
    return (
        <Fragment>
            <h2>Add Category</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </Fragment>
    )
}
AddCategory.PropType = {
    setCategories: PropType.func.isRequired
}
