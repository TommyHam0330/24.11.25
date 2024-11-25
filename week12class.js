class Phone {
    constructor(brand, phonename) {
        this.brand = brand;
        this.phonename = phonename;
    }
    
    intro() {
        document.write("저는" + this.brand + "을 사용하고" + this.phonename + "입니다."+ "<br>");
    }
}
let phone1 = new Phone("아이폰", "iphoneX");
phone1.intro()