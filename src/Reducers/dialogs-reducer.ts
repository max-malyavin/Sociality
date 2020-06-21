import { DIALOGS_SET_ITEMS, DIALOGS_SET_CURRENT_DIALOG} from "../Constants/Constants";

type DialogType = {
  _id: string;
  text: string;
  created_at: any ;
  unreaded: number;
   user: {
      _id: string;
       fullname: string;
       avatar: string;
       isOnline: boolean;
      };
  dialog: string;
}

let initialState = {
    items: [{
          "_id": "5ed0f59568fe8a2081b71ab8",
          "text": "Ты где?",
          "created_at": new Date(),
          "unreaded" : 0,
          "user": {
            "_id": "5ed0f59526411c2f6e54dde3",
            "fullname": "Кантемир Антиох",
            "avatar": "https://source.unsplash.com/100x100/?random=28nature,water",
            "isOnline": true
          },
          "dialog": ""
        },
        {
          "_id": "5ed0f595a8beb33107f4a9ee",
          "text": "Привет,как дела?)",
          "created_at": (+new Date() - 90500000),
          "unreaded" : 0,
          "user": {
            "_id": "5ed0f59561e939c364aeaa9e",
            "fullname": "Державин Гаврила",
            "avatar": "https://source.unsplash.com/100x100/?random=21nature,water",
            "isOnline": false
          },
          "dialog": ""
        },
        {
          "_id": "5ed0f595852e466df2fde940",
          "text": "Это произошло вчера,примерно в 18:00",
          "created_at": (+new Date() - 5000000),
          "unreaded" : 0,
          "user": {
            "_id": "5ed0f595dc00c3fe10ab4727",
            "fullname": "Карамзин Николай",
            "avatar": "https://source.unsplash.com/100x100/?random=22nature,water",
            "isOnline": true
          },
          "dialog": ""
        },
        {
          "_id": "5ed0f595306c9b51cb1d1a9c",
          "text": "Новость однозначно хорошая,но это действительно так произошло?",
          "created_at": (+new Date() - 6600000),
          "unreaded" : 0,
          "user": {
            "_id": "5ed0f5952a635818b2be2efa",
            "fullname": "Княжнин Яков",
            "avatar": "https://source.unsplash.com/100x100/?random=23nature,water",
            "isOnline": false
          },
          "dialog": ""
        },
        // {
        //   "_id": "5ed0f5950c5a392ee79061f7",
        //   "text": "ахахахха",
        //   "created_at": (new Date() - 7990000),
        //   "unreaded" : 1,
        //   "user": {
        //     "_id": "5ed0f5950f3948714ce03ef5",
        //     "fullname": "Ломоносов Михаил",
        //     "avatar": "https://source.unsplash.com/100x100/?random=25nature,water",
        //     "isOnline": true
        //   },
        //   "dialog": ""
        // },
        // {
        //   "_id": "5ed0f59507b8673b5286f618",
        //   "text": "Ты тут????????",
        //   "created_at": (new Date() - 1000000),
        //   "unreaded" : 4,
        //   "user": {
        //     "_id": "5ed0f5958a0c040260f99150",
        //     "fullname": "Радищев Александр",
        //     "avatar": "https://source.unsplash.com/100x100/?random=27nature,water",
        //     "isOnline": false
        //   },
        //   "dialog": ""
        // },
        

    ] as Array<DialogType>,
    currentDialog: null as null | string,
    isLoading: false
};


export type InitialStateType = typeof initialState
 const dialogsReducer = (state = initialState, action:any):InitialStateType => {
   
    switch (action.type) {
        case DIALOGS_SET_ITEMS: 
            return{
            ...state,
            items: action.payload
        };
      
        case DIALOGS_SET_CURRENT_DIALOG: 
            return{
            ...state,
            currentDialog: action.payload
        };
      
        default:
            return state;
    }
    


}

export default dialogsReducer;