import { UserClient } from './user-client.model';
import * as _ from 'lodash';
import { UserRole } from './user-role.model';

export class User {
  userName:string;
  userId:number;
  authenticationToken:string;
  displayName:string;
  accessBrands:boolean;
	accessTasks:boolean;
  accessSpecialProjects:boolean;
  remember:boolean;

  constructor(userId:number,userName:string,authenticationToken:string,displayName:string,accessBrands:boolean,accessTasks:boolean,accessSpecialProjects:boolean,remember:boolean){
  this.userId=userId;
  this.userName=userName;
  this.displayName=displayName;
  this.authenticationToken=authenticationToken;
  this.accessSpecialProjects=accessSpecialProjects;
  this.accessTasks=accessTasks;
  this.accessBrands=accessBrands;
  this.remember=remember;
}
  
  static fromJsonFlat({ userId,userName,authenticationToken,displayName,accessBrands,accessTasks,accessSpecialProjects,remember }) {
    let ret = new User(userId,userName,authenticationToken,displayName,accessBrands,accessTasks,accessSpecialProjects,remember);
    return ret;
  }

}
