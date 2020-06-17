import { DIALOGS_SET_SET_ITEMS, APP_MESSAGE, DIALOGS_SET_IS_LOADING, DIALOGS_SET_CURRENT_ITEMS } from '../Constants/Constants'


const itemDialog = [
    {
      "_id": "5ed0f59568fe8a2081b71ab8",
      "messages": [
          {
              text:'Привет!',
              date: (new Date()-100000000),
              isMe: true
            },
          {
              text:'Привет))))))))',
              date: (new Date()-100000000),
              isMe: false
            },
          {
              text: null,
              date: (new Date()-100000000),
              isMe: false,
              attachments: [
                {
                    filename: '...',
                    url: 'https://source.unsplash.com/100x100/?random=28nature,water'
                }
            ],
            },
          {
            audio : "https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3",
            date: (new Date()-200000000),
            isMe: false
            },

          {
              text:'Ты где?',
              date: (new Date()-100000),
              isMe: true
            },
            {
                text: null,
                date: null,
                isMe: true,
                isTyping: false,
                date: (new Date()-100000),
                attachments: [
                    {
                    filename: '...',
                    url: 'https://source.unsplash.com/100x100/?random=28nature,water'
                    },
                    {
                    filename: '...',
                    url: 'https://source.unsplash.com/100x100/?random=18nature,water'
                    },
                    {
                    filename: '...',
                    url: 'https://source.unsplash.com/100x100/?random=38nature,water'
                    }
                    ]
              },
          {
              text: null,
              date: null,
              isMe: false,
              isTyping: true
            },
        
         
        
        
        ],
      "created_at": "1590570634760",
      "user": {
        _id: "5ed0f59568fe8a2081b71ab8",
        fullname: "Кантемир Антиох",
        avatar: "https://source.unsplash.com/100x100/?random=28nature,water",
        isOnline: true
      },
    },
    {
      "_id": "5ed0f595a8beb33107f4a9ee",
      "messages": [
          
          {
            audio : "https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3",
            date: (new Date()-200000000),
            isMe: false
            },

          {
              text:'Ты где?',
              date: (new Date()-100000),
              isMe: true
            },
            
         
        
        
        ],
      "created_at": "1590570634760",
      "user": {
        _id: "5ed0f595a8beb33107f4a9ee",
        fullname: "Державин Гаврила",
        avatar: "https://source.unsplash.com/100x100/?random=22nature,water",
        isOnline: false
      },
    },
    {
      "_id": "5ed0f595852e466df2fde940",
      "messages": [
          {
              text:'Привет!',
              date: (new Date()-100000000),
              isMe: true
            },
       
          {
            audio : "https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3",
            date: (new Date()-200000000),
            isMe: false
            },

          {
              text:'Ты где?',
              date: (new Date()-100000),
              isMe: true
            },
            {
                text: null,
                date: null,
                isMe: true,
                isTyping: false,
                date: (new Date()-100000),
                attachments: [
                    {
                    filename: '...',
                    url: 'https://source.unsplash.com/100x100/?random=28nature,water'
                    },
                    {
                    filename: '...',
                    url: 'https://source.unsplash.com/100x100/?random=18nature,water'
                    },
                    {
                    filename: '...',
                    url: 'https://source.unsplash.com/100x100/?random=38nature,water'
                    }
                    ]
              },
          {
              text: null,
              date: null,
              isMe: false,
              isTyping: true
            },
        
         
        
        
        ],
      "created_at": "1590570634760",
      "user": {
        _id: "5ed0f595852e466df2fde940",
        fullname: "Карамзин Николай",
        avatar: "https://source.unsplash.com/100x100/?random=21nature,water",
        isOnline: true
      },
    },
    {
        "_id": "5ed0f595306c9b51cb1d1a9c",
        "messages": [
            {
                text:'Привет!',
                date: (new Date()-100000000),
                isMe: true
              },
            {
                text:'Привет))))))))',
                date: (new Date()-100000000),
                isMe: false
              },
  
          
          ],
        "created_at": "1590570634760",
        "user": {
          _id: "5ed0f595306c9b51cb1d1a9c",
          fullname: "Княжнин Яков",
          avatar: "https://source.unsplash.com/100x100/?random=25nature,water",
          isOnline: false
        },
      },
    // {
    //   "_id": "5ed0f595a8beb33107f4a9ee",
    //   "text": "Minim anim irure mollit ullamco commodo tempor. Labore aute proident elit aute velit exercitation laboris et veniam. Velit amet aute nulla ut. Ipsum commodo culpa mollit officia nostrud magna nisi culpa minim mollit nulla ipsum ut irure. Lorem amet nostrud dolore consectetur Lorem enim.",
    //   "created_at": "1590570634760",
    //   "user": {
    //     "_id": "5ed0f59561e939c364aeaa9e",
    //     "fullname": "Valeria Freeman",
    //     "avatar": "https://image.flaticon.com/icons/svg/2979/2979284.svg",
    //     "isOnline": true
    //   },
    //   "dialog": "5ed0f59568fe8a2081b71ab8"
    // },
    // {
    //   "_id": "5ed0f595852e466df2fde940",
    //   "text": "Eu laborum tempor enim esse excepteur ut dolore est excepteur sit id velit. Ea ex cillum sunt occaecat ut ex do. Consectetur sunt eu adipisicing laboris dolor anim nulla nostrud. Reprehenderit adipisicing tempor aute nulla Lorem do eiusmod aliqua officia voluptate aliqua. Irure adipisicing id magna exercitation Lorem id duis magna ut anim adipisicing labore.",
    //   "created_at": "1590570634760",
    //   "user": {
    //     "_id": "5ed0f595dc00c3fe10ab4727",
    //     "fullname": "Mclaughlin Ashley",
    //     "avatar": "https://image.flaticon.com/icons/svg/2979/2979284.svg",
    //     "isOnline": true
    //   },
    //   "dialog": "5ed0f59568fe8a2081b71ab8"
    // },
    // {
    //   "_id": "5ed0f595306c9b51cb1d1a9c",
    //   "text": "Irure non minim esse aliqua ea commodo laborum amet ad. Minim do ex laborum do commodo ut sunt eu non anim. Elit cupidatat aliquip cupidatat proident dolor aute et ea. Cupidatat adipisicing eu minim exercitation. Sunt aliqua exercitation deserunt non culpa sit qui officia elit ullamco ipsum amet.",
    //   "created_at": "1590570634760",
    //   "user": {
    //     "_id": "5ed0f5952a635818b2be2efa",
    //     "fullname": "Mattie Gillespie",
    //     "avatar": "https://image.flaticon.com/icons/svg/2979/2979284.svg",
    //     "isOnline": true
    //   },
    //   "dialog": "5ed0f59568fe8a2081b71ab8"
    // },
    // {
    //   "_id": "5ed0f5950c5a392ee79061f7",
    //   "text": "Deserunt aliquip aute nisi ex qui est nisi. Consectetur eu enim duis cillum laborum commodo in labore est id sit excepteur tempor voluptate. Exercitation nulla commodo elit ex quis non minim. Dolor laborum tempor commodo mollit commodo ipsum consectetur dolore ipsum et adipisicing enim do. Aliqua nostrud cupidatat ipsum deserunt nulla.",
    //   "created_at": "1590570634760",
    //   "user": {
    //     "_id": "5ed0f5950f3948714ce03ef5",
    //     "fullname": "Callahan Holden",
    //     "avatar": "https://image.flaticon.com/icons/svg/2979/2979284.svg",
    //     "isOnline": true
    //   },
    //   "dialog": "5ed0f59568fe8a2081b71ab8"
    // },
    // {
    //   "_id": "5ed0f595776a411bef643f31",
    //   "text": "Minim consequat nisi ea sint sint ex nostrud elit ex laborum exercitation dolore. Magna cupidatat fugiat sunt ea. Amet pariatur ipsum cillum dolor sunt labore mollit cupidatat occaecat aute non aute sunt. Ullamco laboris aliquip quis non quis adipisicing Lorem duis duis deserunt reprehenderit deserunt nulla. Est nostrud nulla eiusmod cillum enim officia commodo nostrud nulla.",
    //   "created_at": "1590570634760",
    //   "user": {
    //     "_id": "5ed0f595ed64d33a5f71eead",
    //     "fullname": "Shari Fleming",
    //     "avatar": "https://image.flaticon.com/icons/svg/2979/2979284.svg",
    //     "isOnline": true
    //   },
    //   "dialog": "5ed0f59568fe8a2081b71ab8"
    // },
    // {
    //   "_id": "5ed0f59507b8673b5286f618",
    //   "text": "Aute commodo ut anim mollit officia exercitation sint reprehenderit. Laborum tempor sint excepteur tempor elit ea. Amet deserunt pariatur exercitation incididunt. Proident ullamco laboris Lorem tempor aliqua culpa qui veniam ad. Labore elit culpa amet reprehenderit aute duis ea velit voluptate tempor dolore voluptate laboris incididunt.",
    //   "created_at": "1590570634760",
    //   "user": {
    //     "_id": "5ed0f5958a0c040260f99150",
    //     "fullname": "Patrick Stein",
    //     "avatar": "https://image.flaticon.com/icons/svg/2979/2979284.svg",
    //     "isOnline": true
    //   },
    //   "dialog": "5ed0f59568fe8a2081b71ab8"
    // },
    // {
    //   "_id": "5ed0f59509d5fa29dad32b1e",
    //   "text": "Est veniam Lorem aliquip pariatur reprehenderit esse sunt nostrud eiusmod laborum commodo. Duis mollit qui ad sunt amet proident elit voluptate velit adipisicing magna in. In aute dolore sunt id elit ipsum id id adipisicing exercitation fugiat eiusmod enim laborum. Non eiusmod amet anim enim commodo pariatur ea. Minim dolor enim qui nulla veniam ut eu.",
    //   "created_at": "1590570634760",
    //   "user": {
    //     "_id": "5ed0f595dd86dc18f58638ff",
    //     "fullname": "Tanisha Vega",
    //     "avatar": "https://image.flaticon.com/icons/svg/2979/2979284.svg",
    //     "isOnline": true
    //   },
    //   "dialog": "5ed0f59568fe8a2081b71ab8"
    // },
    // {
    //   "_id": "5ed0f595b87fa5b507c60495",
    //   "text": "Eiusmod minim amet nisi qui sit consectetur irure consequat cupidatat dolore proident consectetur. Minim pariatur laborum mollit Lorem nostrud labore non est dolor occaecat. Excepteur eiusmod dolor id anim. Aliqua veniam labore tempor sint. Do culpa commodo non magna est esse aute.",
    //   "created_at": "1590570634760",
    //   "user": {
    //     "_id": "5ed0f5950ae4364f19f1c285",
    //     "fullname": "Head Booth",
    //     "avatar": "https://image.flaticon.com/icons/svg/2979/2979284.svg",
    //     "isOnline": true
    //   },
    //   "dialog": "5ed0f59568fe8a2081b71ab8"
    // }
]


let initialState = {
    items: null,
    isLoading: false
};

 const messagesDialog = (state = initialState, action) => {

    switch (action.type) {
        // case DIALOGS_SET_SET_ITEMS: 
        //     return{
        //     ...state,
        //     items: action.payload,
        //     isLoading: false
        // };
        case DIALOGS_SET_IS_LOADING: 
            return{
            ...state,
            isLoading: action.payload
        };
        case APP_MESSAGE: 
        // const f = Object.values(...state.items[0])
        // console.log(f)
            return{
            ...state,
            items: state.items
              
              // {...state.items, [state.items.messages] }
              // ...state.items.messages, messages: [...state.items[0].messages, {
              //       text: action.payload.message,
              //       date: new Date()-100000000,
              //       isMe: false
              //   }]
             
          
        };
        case DIALOGS_SET_CURRENT_ITEMS: 
            const currentD = itemDialog.find(item => {
                return item._id == action.payload
            })
            return{
            ...state,
            items: [currentD]
        };

        default:
            return state;
    }
    


}

export default messagesDialog;