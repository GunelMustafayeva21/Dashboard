export interface ILogin{
    user:IUser | null,
    token:string,
    refreshToken:string,
    expiresAt:string
}
export interface IUser{
    id:string,
    userName:string,
    firstName:string,
    lastName:string,
    email:string
}
export interface IToken{
    token:string,
    refreshToken:string,
    expiresAt:string
}