function Person (name, age) {
    this.name = name;
    this.age = age;
    this.intro = function () {
        document.write("제 이름은 " + this.name + "이고, 나이는 " + this.age + "살 입니다.<hr>");
    }
};
let person1 = new Person("함승빈", 24)
person1.intro();