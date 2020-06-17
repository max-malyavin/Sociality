import React from 'react'
import './Card.scss'
import {  Draggable} from 'react-beautiful-dnd'
import { connect } from 'react-redux'
import { removeCard } from '../../../../Actions/Actions'

const Card = ({cardIndex,panelIndex,children,removeCard,showForm}) => {
    return ( <Draggable  draggableId={`card-${panelIndex}-${cardIndex}`}
               index={cardIndex}>
               {(provided) => (
                <div className='card' ref={provided.innerRef} {...provided.draggableProps}
                  {...provided.dragHandleProps} >
                    <div>{children}</div>
                    {!showForm && <span onClick={() => removeCard(panelIndex,cardIndex)}>X</span>}
                </div>         
                   )}
          </Draggable>)
}

export default connect(null,{
  removeCard
})(Card);

