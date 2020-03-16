// JavaScript의 number
//산술연산을 할 수있다
let n1 = 5; 
let n2 = Number(5);
console.log(n1, "==", n2, "?", n1==n2);
console.log(typeof n1, typeof n2);

//여러 형태의 수치 데이터
const hex = 0xFFCCAA; //16진수 (0x)
const oct = 0o10; //8진수 (0o)
console.log(hex,oct);

//수학함수의 활용(MATH객체 활용)
console.log(Math.PI);
console.log(Math.min(3,2,5,7,1),Math.max(6,3,2,4,6));
console.log(Math.round(3.567), Math.floor(3.567));//반올림과 버림

//그 외 넘버가 가지고 있는 상수들
console.log("최대 정수:", Number.MAX_SAFE_INTEGER);
console.log("최소 정수:", Number.MIN_SAFE_INTEGER);
console.log("표현할 수 있는 최대 수:", Number.MAX_VALUE);
console.log("표현할 수 있는 최소 수:", Number.MIN_VALUE);

//CASTING
console.log("-----Castng: parse 계열 함수들");
//js는 동적 타이핑 언어
//주로 파라미터로 문자열이 넘어오는 경우가 많음->캐스팅
console.log(parseInt("011"));//10진수로 캐스팅
console.log(parseInt("011", 2)); //011이 2진수다(진법 변환 캐스팅)
console.log(parseInt("123.456")); //정수형으로 변환
console.log(parseFloat("123.456")); //실수형으로 변환

console.log(parseInt(Math.PI)); //실수형->정수형으로 변환

//숫자로 변환 할 수없는 형태의 문자열을 변환하면 NaN
let v = parseInt("abc1234");
console.log(v, "is", typeof v); 
//NaN인지 확인 하기 위해서 isNaN()함수
console.log(v, "is NaN?", isNaN(v));
console.log(v + 10); //nan이 포함된 산술연선 ->nan

//infinity
let result = 1/0; //infinity
console.log("1/0", result);
console.log(typeof result);
//infinity 는 산술연ㅅㄴ에 포함시키면 infinity
console.log(result + 10);

//infinity가 아닌지확인하고자 한다면 isfinite()
console.log(isFinite(result));
console.log(isFinite(2019));
console.log(isFinite(parseInt("abc123"))); // nan->유한수 아님


