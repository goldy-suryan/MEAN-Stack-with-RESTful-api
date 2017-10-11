export interface ISignup {
    username: string,
    email: string,
    password: string
}

export interface Ilogin {
    username: string,
    password: string,
    data: Idata
}

interface Idata {
    username: string,
    email: string,
    id: Number
}

export interface Iblogs {
    title: string,
    description: string,
    createdBy: string,
    date: Date
}