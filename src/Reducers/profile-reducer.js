import { APP_POST, SET_USER_PROFILE, SET_STATUS, SAVE_PHOTO_SUCCES, ADD__LIKE, DIS__LIKE } from "../Constants/Constants";
import { stubTrue } from "lodash";

const initialState = {
    posts:[
        {id: 1911,
        text: 'Уехал на дачу. В сеть заходить не буду!',
        likes: 10,
        myLike: false},
        
        {id:1912,
        text: 'Мой первый пост! :)))',
        likes: 1,
        myLike: true},
    ],
    profile: null,
    status: ''
   };

 const profileReducer = (state = initialState, action) => {
     
    switch (action.type) {

        case APP_POST: 
                return{ ...state,
                    posts: [{id: 66 * Math.random(),
                      text: action.payload,
                      likes: 0,
                      myLike: false
                    },  ...state.posts,  ],
                    newPostText: ''};

        case SET_USER_PROFILE: 
                    return{ ...state,
                     profile: action.profile
                    };
        case SET_STATUS: 
                    return{ ...state,
                     status: action.status
                    };
        case SAVE_PHOTO_SUCCES: 
      
                    return{ ...state,
                     profile: {...state.profile, photos: action.payload}
                    };
        case ADD__LIKE: 
            state.posts.find((e) => {
                if(e.id == action.payload){
                    return {
                        ...e, myLike: e.myLike = !e.myLike, likes: e.likes = e.likes + 1
                    }
                }
            })
           
              return{ ...state,
                     posts: [...state.posts]
                };
        case DIS__LIKE: 
            state.posts.find((e) => {
                if(e.id == action.payload){
                    return {
                        ...e, myLike: e.myLike = !e.myLike, likes: e.likes = e.likes - 1
                    }
                }
            })
           
              return{ ...state,
                     posts: [...state.posts]
                };
        default:
            return state;
    }

}

export default profileReducer;
