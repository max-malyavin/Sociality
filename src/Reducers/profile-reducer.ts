import { APP_POST, SET_USER_PROFILE, SET_STATUS, SAVE_PHOTO_SUCCES, ADD__LIKE, DIS__LIKE } from "../Constants/Constants";
import { ProfileType, PostsType, PhotosType } from "../Types/Types";


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
    ] as Array<PostsType>,
    profile: null as ProfileType | null | any,
    status: ''
   };

export type InitialStateType = typeof initialState;

 const profileReducer = (state = initialState, action: any): InitialStateType => {
     
    switch (action.type) {

        case APP_POST: 
                return{ ...state,
                    posts: [{id: 66 * Math.random(),
                      text: action.payload,
                      likes: 0,
                      myLike: false
                    },  ...state.posts,  ],
                };

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



type AddPostActionType = {
    type: typeof APP_POST,
    payload: string
}

const addPost = (newPostBody: string): AddPostActionType => ({type: APP_POST, payload: newPostBody})

type SetUserProfiletActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}

const setUserProfile = (profile: ProfileType): SetUserProfiletActionType => ({type: SET_USER_PROFILE, profile})



type SetStatusProfiletActionType = {
    type: typeof SET_STATUS,
    status: string
}


 const setStatus = (status: string): SetStatusProfiletActionType => ({type: SET_STATUS, status})




 type SavePhotoActionType = {
    type: typeof SAVE_PHOTO_SUCCES,
    payload: PhotosType
}




const savePhotoSucces = (photos: PhotosType): SavePhotoActionType => ({type: SAVE_PHOTO_SUCCES, payload: photos} )