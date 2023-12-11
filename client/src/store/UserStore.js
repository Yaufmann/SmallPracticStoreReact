import {makeAutoObservable} from "mobx";
export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }
    setIsAuth(isAuth) {
        if(!isAuth) {
            localStorage.removeItem('token');
        }
        this._isAuth = isAuth;
    }
    setUser(user) {
        this._user = user
    }

    getUserIsAuth(){
        return this._isAuth
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}