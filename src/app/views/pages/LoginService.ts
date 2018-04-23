import { Injectable} from '@angular/core'

@Injectable()
export class LoginService{

    constructor() {
        
    }

    ValidateUser(username:string,password:string){
        //Facke Login service
        let user={
            role:'',
            id:''
        }
        if(username=='admin' && password=='admin'){
            user.role='admin';
            user.id='1aaa8c4f-7788-4485-ad2c-d319283d6b0f';
            localStorage.setItem('user',JSON.stringify(user));
            return true;
        }else if(username=='operador' && password=='operador'){
            user.role='operador';
            user.id='64b73a15-7788-4485-ad2c-d319283d6b0f';
            localStorage.setItem('user',JSON.stringify(user));
            return true;
        }else{
            localStorage.removeItem('user');
            return false;           
        }
        
    }
}