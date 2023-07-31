export interface IDefaultProvideProps{
    children: React.ReactNode;
}

export interface IUser{
    name: string,
    password: string,
    email: string,
}

export interface IUserResponse{
    id: number,
    name: string,
    email: string,
    phone: string,
    createdAt: string,
}

export interface IUserEdit{
    name?: string,
    password?:string,
    phone?: string,
}



export interface IUserContextProvider{
   userLogin: (data: IloginFormValues) => Promise<void>,
   loading: boolean,
   user: IUserResponse | undefined,
   renderUser: () => Promise<void>,
   userLogout: () => void,
   userRegister: (data: IRegister) => Promise<void>,
   idUser: undefined,
   editeUser: (data: IUserEdit, id: number) => Promise<void>,
   modalUser: boolean,
   toggleModalUser: () => void,
   deleteUser: (id: number) => Promise<void>
}

export interface LoginResponse {
    token: string
}

export interface IloginFormValues{
    email: string;
    password: string;
}

export interface IRegister{
    name: string;
    email: string;
    password: string;
    phone: string;
}