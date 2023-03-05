/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-05 00:15:08
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-05 20:20:07
 * @FilePath: \blog\test.js
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
class Parson {
    constructor() {
        this.name = "duxin"
    }

}


class Child extends Parson {
    constructor() {
        super();
        this.age = "908"
    }
}

const child = new Child()
console.log(child.name); // duxin