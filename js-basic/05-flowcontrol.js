//if문:조건 분기
let num =10;
//0보다 크면 양수,작으면 음수 0이면 0

if(num>0){
    console.log(num, "은 양수");

}else if (num<0){
    console.log(num, "은 음수");
}else{
    console.log(num, "은 0");
}

//switch문
const grade = "C";
//a,b면 good ,  c,d면 pass , f면 fail , 그 외면 ?
switch(grade){
    case "A":
    case "B":
        message = "Good";
        break;
    case "C":
    case "D":
        message = "Pass";
        break;
    case "F":
        message = "Fail";
        break;
    default: //위에 일치하는 값이 없을 때
        message = "?";    


}
console.log("Grade:" , grade, ",Message:",message );

/*논리 연산자
    &&(AND 연): 둘디 TTRUE면 TRUE
    ||(OR) :둘 중 하나만 TRUE면 TRUE
    ! : 논리값을 부정 TRUE<->FALSE
    */

//연숩 LOOP연습
//1. 구구단 2단~9단까지 출력 (FOR버전, WHILE버전)
//2. 삼각형 그리기(FOR버전, WHILE버전)
/*

*****
****
***
**
*

*/

// for(let i=2; i<=9; i++){
//     for(let j=1; j<=9; j++){
//         console.log(i + "*" + j + "=" + i*j);
//     }
//     console.log();
// }

// for(let i=0;i<5;i++){
//     let stars = "";
//     for(let j=4; j>=i; j--){
//         stars += "*";
// }
// console.log(stars);
// }

// let i =2;
// let j = 1;
// while(i<=9){
//     while(j<=9){
//         console.log(i+ "*" +j + "=" + i*j);
//         j++;
//     }
//     j=1;
//     i++;
// }

// while(i<=5){
//     let j = 0;
//     while(j<=i){
//         let stars = "*";
//     }
// }
//풀이 구구단 for버전
for(let dan = 2; dan <=9; dan++){
    console.log(dan, "단");
    for(let num = 1; num <=9; num++){ 
        console.log(dan + "*" + num + "=" + (dan * num));
    }
}

//풀이 : 구구단 while버전
let dan =2 ;
while (dan <=9){
    console.log(dan + "단");
    let num = 1;
    while(num <=9){
        console.log(dan + "*" + num + "=" + (dan* num));
        num++;
    }
    dan++;
}

//풀이 : 별그리기 for버전
for (let i = 5; i > 0; i--){
    let stars = "*";
    for(let j = 0; j< i ; j++){
        stars += "*";
    }
    console.log(stars);
}

//풀이 : 별 그리기 while버전
let  i = 5;
while(i > 0){
    let stars = "";
    let j = i;
    while( j > 0){
        stars += "*";
        j--;
    }
    console.log(stars);
    i--;
}