import { Pet } from "./Pet";
import { User } from "./User";

let user = new User(88, "test", "Hofmann", "Philipp", new Pet("Klaus", "Fisch"));
let arr = new Array<number>;
arr = [1,2,3];

console.clear();
console.log(user);
// console.log(user.changePwd("test", "hallo"));

let hallo = function hallo(){console.log("hallo");}
hallo = function () {console.log("hallo");}
hallo = () => {console.log("hallo");}
hallo = () => console.log("hallo");

// hallo();

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(element => console.log("foreach: " + element));