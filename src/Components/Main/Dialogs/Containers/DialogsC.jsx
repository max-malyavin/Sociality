import React, { useState, useEffect } from 'react'
import DialogsBar from '../DialogsBar'
import { fetachDialogs } from '../../../../ThunkCreator/ThunkCreator'
import { connect } from 'react-redux'
import { setCurrentDialog } from '../../../../Actions/Actions'

const DialogsC = ({userId = 0, dialogs:{items,currentDialog},setCurrentDialog, fetachDialogs, }) => {
   
    useEffect(() => {
        if(!items.length){
            // fetachDialogs()
        }else {
            setFilteredItems(items)
        }    
    },[items])

    const [inputValue, setValue] = useState('')
    const [filtered, setFilteredItems] = useState(Array.from(items))
  
    const onChangeInput = value => {
        setFilteredItems(items.filter(dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0))
        setValue(value)
    }

    return <DialogsBar items={filtered}
     userId={userId} onSearch={onChangeInput}
     currentDialog={currentDialog}
     onSelectDialog={setCurrentDialog}
     inputValue={inputValue}/>
}


const  mapStateToProps = (state) => {
    return {
        dialogs: state.messages
    }
}
export default connect( mapStateToProps, {fetachDialogs, setCurrentDialog})(DialogsC);
