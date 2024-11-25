class Food {
    constructor(cate, name) {
        this.cate = cate;
        this.name = name;
    }
    intro() {
        document.write("제가 좋아하는 음식은 " + this.cate + "인 " + this.name + " 입니다. <br>" + "<hr>");
    }
}
let food1 = new Food("양식", "스파게티")
food1.intro()