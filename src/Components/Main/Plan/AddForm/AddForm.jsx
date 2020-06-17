import React, { useState,useRef, useEffect } from 'react'
import './AddForm.scss'
import Button from '../Button/Button'
import Card from '../Card/Card'



const AddForm = ({panelIndex,isEmpty,onAddPanel,onAddCard}) => {

    const [showForm, setShowForm] = useState(false)
    const [value, setValue] = useState("")
    const textareaRef = useRef(null)
    useEffect(()=> {
        if(textareaRef.current){
            textareaRef.current.focus()
        }

    }, [showForm])


    const onAdd = () =>{
       if(isEmpty){
        onAddPanel(value)
     
       }  else {
            onAddCard(panelIndex, value)

       } 
       setValue('')
       setShowForm(false)
    }



    return ( <>
        {showForm ? <div className="add-form">
        <div className="add-form__input">
            <Card showForm={showForm}><textarea onChange={e=> setValue(e.target.value)} value={value} placeholder={isEmpty ? 'Введите название колонки' : 'Введите название карточки'} ref={textareaRef} className='add-form__textarea'/></Card>
            <div className='add-form__bottom'>
                <Button onClick={onAdd}>{isEmpty ? 'Введите название колонки' : 'Введите название карточки'}</Button>
                <div className="close" onClick={()=> setShowForm(false)}>x</div>
            </div>
        </div>
    </div> :
        <div className="add-form__bottom">
             <div  onClick={()=> setShowForm(true)} className="add-form__bottom-add-btn">
                 <span>+</span>
                 <div>{isEmpty ? 'Введите название колонки' : 'Введите название карточки'}</div>
             </div>
        </div>}
     </>)
}

export default AddForm
