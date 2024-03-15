function generatePassWord(length, isToUpperCase, isToLowerCase, isNumber, isSymbol) {
    // generate content 
    const Upper = "ASDFGHJKLQWERTYUIPOZXCVBNM";
    const Lower = "asdfghjklqwertyuiopzxcvbnm";
    const number = "1234567890";
    const symbol = "!@$%^&*()_+=?><',.~`";
    // initialization variable
    let sum = "";
    let result = "";
    // save value onto sum 
    sum += isToUpperCase ? Upper : "";
    sum += isToLowerCase ? Lower : "";
    sum += isNumber ? number : "";
    sum += isSymbol ? symbol : "";

    for (let i = 0; i < length; i++) {
        if(length < 0 ) {
            return "length  > 0";
        }
        else {
            if(sum === ""){
                return "selection mode";
            }
            let ran = Math.floor(Math.random() * sum.length);
            result += sum[ran];
        }
       

    }
    return result;
}
// console.log(generatePassWord(10, true,false,false,true));
class bike {
    constructor (wheel , color ) {
        this._color = color;
        this._wheel = wheel;
    }
    get getWheel() {
        return this._color;
    }
    get getColor(){
        return this._wheel;
    }
    set Wheel(Changewheel){
        if(Changewheel < 0) {
            console.error("wheel great than 0");

        }
        else {
            this._wheel = Changewheel;
        }
    }
    set Color(Changecolor){
        if( typeof Changecolor === String && Changecolor.length > 0) {
            this._color = Changecolor;
           

        }
        else {
            console.error("Color error");
        }
    }
}
const bike1 = new bike(4,"red");
console.log(bike1);