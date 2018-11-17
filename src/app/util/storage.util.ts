import { Observable } from 'rxjs/Observable';

/**
 * The storage types available for usage
 *
 * @export
 * @enum {number}
 */


export abstract class StorageUtil {
  
  static KEY_SESSION="sessionToken";
  static KEY_USER="user";
  static KEY_NEED_LOADING="needLoading"; 
   static KEY_APP_ID ="applicationId";


  public static setSessionKey(value:string){
    localStorage.setItem (this.KEY_SESSION,value);
  }

  public  static getSessionKey(){
    return localStorage.getItem(this.KEY_SESSION);
  }

  public static clearAll(){
    localStorage.removeItem(this.KEY_SESSION);
    localStorage.removeItem(this.KEY_USER);
    localStorage.removeItem(this.KEY_NEED_LOADING);
    localStorage.removeItem(this.KEY_APP_ID);

  }

  public static setUser(value:any){
    localStorage.setItem (this.KEY_USER,JSON.stringify(value));
  }

  public static getUser(){
   return localStorage.getItem(this.KEY_USER) ?JSON.parse(localStorage.getItem(this.KEY_USER)) : null;
  }

  public static setNeedLoading(value: string){
    localStorage.setItem(this.KEY_NEED_LOADING,value);
  }

  public static getNeedLoading(){
   return localStorage.getItem(this.KEY_NEED_LOADING);
  }
  public static setApplicationId(value: string){
    localStorage.setItem(this.KEY_APP_ID,value);
  }

  public static getApplicationId(){
   return localStorage.getItem(this.KEY_APP_ID);
  }
}
