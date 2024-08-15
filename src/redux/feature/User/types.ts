export interface ILogin{
    user:IUser | null,
    tokens:IToken
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