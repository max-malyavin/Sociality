import React from 'react'
import './Panel.scss'
import Card from '../Card/Card'
import AddForm from '../AddForm/AddForm'
import classnames from 'classnames'
import {  Droppable} from 'react-beautiful-dnd'


const Panel = ({title,cards,addPanel,addCard,panelIndex,onRemovePanel}) => {

    const removePanel = () => {
        onRemovePanel(panelIndex)
    }
  
    return (
      <Droppable type='COLUMN' droppableId={`panel-${panelIndex}`}>
        {(provided) => (<div className={classnames('panel', {'panel--empty': !cards})} 
         {...provided.droppableProps} ref={provided.innerRef}>
          {title && <div className='panel__title'>
                        <b >{title}</b>
                        <div onClick={removePanel}>x</div>
            </div>}
         {cards && ( <div className="panel__items">
            {cards.map((item, index) => (
                     <Card panelIndex={panelIndex} cardIndex={index} key={index}>{item}</Card>
              ))}
           </div> )}
              <AddForm isEmpty={!cards} onAddPanel={addPanel}
                panelIndex={panelIndex} onAddCard={addCard}/>
      </div>)}
    </Droppable>
)}

export default Panel
