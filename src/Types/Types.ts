import { AppStateType } from "../Redux/Redux-store"

export type PostsType = {
    id: number;
    text: string;
    likes: number;
    myLike: boolean;
}
export type PhotosType = {
    small: string | null,
    large: string | null,
}
export type ContactsType = {
    github: string,
    vk: string,
    facebook:  string,
    instagram:  string,
    twitter: string,
    website:  string,
    youtube:  string,
    mainLink:  string,
}
export type ProfileType = {
     userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType
}
export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType
}

export type GetStateType = ()=> AppStateType

