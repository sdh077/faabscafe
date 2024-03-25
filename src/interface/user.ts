export interface User {
    id: number
    key: string
    tel: string
    uid: string
    auth: string
    memo: string
    name: string
    type: string
    email: string
    policy: string
    address1: string
    address2: string
    password: string
    created_at: string
    address_post: string
}

export interface Address {
    id: number,
    created_at: string;
    name: string;
    address1: string;
    address2: string;
    phone: string;
    request: string;
    is_default: boolean,
    post: string
    user_id: number
}