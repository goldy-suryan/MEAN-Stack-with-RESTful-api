export interface ISignup {
    username: String,
    email: String,
    password: String
}

export interface Ilogin {
    username: String,
    password: String,
    data: Idata
}

interface Idata {
    username: String,
    email: String,
    id: Number
}

export interface Iblogs {
    title: String,
    description: String,
    createdBy: String,
    date: Date
}