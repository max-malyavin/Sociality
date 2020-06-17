import React from 'react'
import Card from './Card/Card'
import Panel from './Panel/Panel'
import './Plan.scss'
import { connect } from 'react-redux'
import { addPanel, addCard, removePanel, reorderCards } from '../../../Actions/Actions'
import { DragDropContext} from 'react-beautiful-dnd'

const Plan = ({items,addPanel,addCard,removePanel,reorderCards}) => {

    const onDragEnd = (result)=> {
        const {source, destination} = result
        if(!destination || source.droppableId === destination.droppableId &&
            source.index === destination.index){
                return
        }
        reorderCards({
            source,
            destination
        })
    }

    return (
        <div className='plan'>
            <DragDropContext onDragEnd={onDragEnd}>
                    {items.map((item,key) =>(
                    <Panel {...item} onReorder={reorderCards} onRemovePanel={removePanel} panelIndex={key} addPanel={addPanel} addCard={addCard} key={key} />  ))}
                   <Panel addPanel={addPanel} addCard={addCard}/>
           </DragDropContext>
        </div>
    )
}


const  mapStateToProps = (state) => {
    return {
        items: state.panels,
    }
}

export default connect(mapStateToProps,{
    addPanel,
    addCard,
    removePanel,
    reorderCards
})(Plan);

