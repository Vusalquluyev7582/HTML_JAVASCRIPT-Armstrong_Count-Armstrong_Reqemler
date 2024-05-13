// 153 - 370 - 407 rəqəmləri Armstrong rəqəmlərdir

// 153 = 1*1*1 + 5*5*5 + 3*3*3  = 1 + 125 + 27 = 153
// 370 = 3*3*3 + 7*7*7 + 0*0*0  = 27 + 343 + 0 = 370
// 407 = 4*4*4 + 0*0*0 + 7*7*7  = 64 + 0 + 343 = 407


let say = prompt("Rəqəm daxil edin");
let cəm = 0;

for (let i = 0; i < say.length; i++) {
    let rəqəm = say.charAt(i);
    cəm += rəqəm * rəqəm * rəqəm;
}
if (say == cəm) {
    alert("Armstrong rəqəmdir");
}
else {
    alert("Armstrong rəqəm deyil");
}