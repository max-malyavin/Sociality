import { CARDS__ADD, PANELS__ADD, PANELS__REMOVE, CARD__REORDER,CARDS__REMOVE } from "../Constants/Constants";

let initialState = [
    {
        title: 'План на месяц',
        cards: [
            'Прочитать 10 книг',
            'Устроиться на работу',
            'Сбросить 10 кг',
            'Пройти курс по React',
        ]
    },
    {
        title: 'План на день',
        cards: [
            'Вечерняя пробежка',
            'Записаться на курс английского',
        ]
    },
]
const reorderCards =  ({ state, source, destination }) => {
    const { index: sourceCardIndex, droppableId: sourceId } = source;
    const {
      index: destinationCardIndex,
      droppableId: destinationId
    } = destination;
    const sourceColumnIndex = parseInt(sourceId.replace("panel-", ""));
    const destinationColumnIndex = parseInt(destinationId.replace("panel-", ""));
  
    return state.map((item, currentColumnIndex) => {
      if (destinationColumnIndex === currentColumnIndex) {
        const [sourceCard] = state[sourceColumnIndex].cards.splice(
          sourceCardIndex,
          1
        );
        const destinationCards = Array.from(state[destinationColumnIndex].cards);
        destinationCards.splice(destinationCardIndex, 0, sourceCard);
        item.cards = destinationCards;
      }
  
      return item;
    });
  };

const panelReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case CARDS__ADD: 
            return state.map((item,index) => {
                if(action.payload.panelIndex === index){
                    return {
                        ...item,
                        cards: [...item.cards,action.payload.text]
                    }
                }
                return item
            })
        case PANELS__ADD: 
            return [
                ...state,
                {
                    title: action.payload,
                    cards: []
                }
              ]
        case PANELS__REMOVE: 
            return state.filter((_,index) => action.payload !== index)
        case CARDS__REMOVE: 
            return state.map((item, panelIndex) => {
                if (action.payload.panelIndex === panelIndex) {
                return {
                    ...item,
                    cards: item.cards.filter(
                    (_, filterIndex) => filterIndex !== action.payload.cardIndex
                    )
                };
                }
                return item;
            });
        case CARD__REORDER: 

            const { source, destination } = action.payload;
            return reorderCards({
                state,
                source,
                destination
              });
            
        default:
            return state;
    }

}


export default panelReducer;
