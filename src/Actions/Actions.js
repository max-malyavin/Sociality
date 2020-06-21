import { ADD__LIKE, DIALOGS_SET_IS_LOADING,DIALOGS_SET_SET_ITEMS,DIALOGS_SET_CURRENT_DIALOG,TOGGLE_IS_FOLLOWING_PROGRESS, DIALOGS_SET_ITEMS,APP_POST, SEND_MESSAGE,  UNFOLLOW, FOLLOW, SET_USERS, SET_USER_DATA, CURRENT_PAGE ,SET_TOTAL_USERS_COUNT, TOGGLE_IS_FETCHING, SET_USER_PROFILE, SET_STATUS, SAVE_PHOTO_SUCCES, PANELS__ADD, APP_MESSAGE, CARDS__ADD,PANELS__REMOVE,CARD__REORDER,CARDS__REMOVE,DIALOGS_SET_CURRENT_ITEMS,DIS__LIKE,SET_COVID_COUNTRY, SET_COVID_DATA, GET_CAPTCHA_URL} from "../Constants/Constants"

export const addPost = (newPostBody) => ({type: APP_POST, payload: newPostBody}) //+
export const addMessage = (message,id) => ({type: APP_MESSAGE, payload: {message, id}})
export const updateNewPMessageBody = () => ({type: SEND_MESSAGE})
export const follow = (userID) => ({type: FOLLOW, userID}) //+
export const unfollow = (userID) => ({type: UNFOLLOW, userID}) //+
export const setUsers = (users) => ({type: SET_USERS, users}) //+
export const setCurrentPage = (pageNumber) => ({type: CURRENT_PAGE, pageNumber}) //+
export const setTotalUserCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount}) //+
export const toggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching}) //+
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})//+

export const toggleFollowingProgress = (isFetching,userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}) //+
export const setStatus = (status) => ({type: SET_STATUS, status})//+
export const setDialogs = (items) => ({type: DIALOGS_SET_ITEMS, payload: items})
export const setCurrentDialog = (id) => ({type: DIALOGS_SET_CURRENT_DIALOG, payload: id} )
export const setMessages = (items) => ({type: DIALOGS_SET_SET_ITEMS, payload: items} )
export const setIsLoading = (bool) => ({type: DIALOGS_SET_IS_LOADING, payload: bool} )
export const savePhotoSucces = (photos) => ({type: SAVE_PHOTO_SUCCES, payload: photos} ) //+
export const addPanel = (name) => ({type: PANELS__ADD, payload: name})
export const addCard = (panelIndex, text) => ({type: CARDS__ADD, payload: {panelIndex,text}})
export const removePanel = (index) => ({type: PANELS__REMOVE, payload: index})
export const removeCard = (panelIndex, cardIndex) => ({type: CARDS__REMOVE, payload: {panelIndex, cardIndex}})
export const reorderCards = ({ source, destination }) => ({type: CARD__REORDER, payload: { source, destination}})
export const setCurrentMessages = (id) => ({type: DIALOGS_SET_CURRENT_ITEMS, payload: id} )
export const addLike = (id) => ({type: ADD__LIKE, payload: id})
export const disLike = (id) => ({type: DIS__LIKE, payload: id})
export const setCovidData = (data) => ({type: SET_COVID_DATA, payload: data})
export const setCountryCovid = (country) => ({type: SET_COVID_COUNTRY, payload: country})

















// auth!
export const setAuthUserData = (id, email, login, isAuth ) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}}) //+
export const CAPTCHA = (url) => ({type: GET_CAPTCHA_URL, payload: url})//+