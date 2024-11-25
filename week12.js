function Student (major, name) {
    this.name = name;
    this.major = major;
    this.intro = function () {
        document.write("제 학과는 " + this.major + "이고, 이름은 " + this.name + "입니다.<hr>");
    }
};

let student1 = new Student("항공컴퓨터학과", "김주령")

student1.intro();