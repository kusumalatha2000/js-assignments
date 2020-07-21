let names = [];
class User {
    constructor(name,age,email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.courses = [];
    }
    login() {
        console.log(`${name} loged in`);
    }
    logout() {
        console.log(`${name} loged out`);
    }
}
let user1 = new User("Ramu",24,"ramu@gmail.com");
let user2 = new User("seeths",23,"sita@gmail.com");

class Moderator extends User{
    constructor(name,age,email) {
        super(name,age,email);
        this.addCoins = 0;
        this.removeCoins = 0;
    }
    addingCoins() {
        this.addCoins++;
        console.log(`${this.addCoins}`);
        return this;
    }
    removingCoins() {
        this.removeCoins--;
        return this;
    }
}
let mod = new Moderator("rohini",24,"r@gmail.com");
mod.addingCoins();
let mod1 = new Moderator("ravi",24,"ra@gmail.com");
mod1.addingCoins();
class Admin extends Moderator {
    addCourse(user,course) {
        user.courses.push(course);
        console.log(user);
    }
}
let admin1 = new Admin("kusuma",20,"k@gmail.com");
admin1.addCourse(user1,"Java");
admin1.addCourse(user2,"Java");
admin1.addCourse(user1,"JavaScript");

