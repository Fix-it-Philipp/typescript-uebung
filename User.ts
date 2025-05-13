import { People } from "./People";
import { Pet } from "./Pet";

export class User extends People{
    private age: number;
    private pwd: string;
    private pet: Pet;
    
    constructor (age:number, pwd: string, name: string, firstname: string, pet: Pet){
        super(name, firstname);
        this.age = age;
        this.pwd = pwd;
        this.pet = pet;
    }

    getPet(){
        return this.pet;
    }

    public setPwd(pwd: string){
        this.pwd = pwd;
    }
    private getPwd(): string {
        return this.pwd;
    }
    comparePwd(input: string): boolean{
        return (input === this.getPwd());
    }
    changePwd(oldPwd: string, newPwd: string):any{
        // if (this.comparePwd(oldPwd)){
        //     this.setPwd(newPwd);
        //     return true;
        // }
        // return false;
        return this.comparePwd(oldPwd) ? newPwd.length >= 7 ? this.setPwd(newPwd) : "pwd zu kurz" : this.callSec();
    }
    callSec(){
        return "U are not U";
    }

    public getAge():number{
        return this.age;
    }
    public setAge(age:number){
        this.age = age;
    }
}