export enum CharTypes {
    LOAD_REQUEST = '@teste/LOAD_REQUEST',
    LOAD_SUCCESS = '@teste/LOAD_SUCCESS',
    LOAD_FAIL = '@teste/LOAD_FAIL'
}

export interface Char {
    id: string
    name: string
    status: string
    birthdate: string
    bio: string
    image: string
}

export interface CharAppState {
    readonly data: Char[]
    readonly loading: boolean
    readonly error: boolean
}
