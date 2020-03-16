//주석
/*
주석은 한줄 주석, 여러줄 주석
*/
//console 내장 객체
//자바 스크립트 콘솔에 메시지를 출력
console.error("에러 메시지");
console.warn("경고 메시지");
console.debug("개발용 디버그 메시지");
console.info("정보 메시지");
console.log("Hello, Node.js");

//내용을 연속으로 출력할 경우 , 로 구분
console.log("String", 10);

//객체의 내용을 접근할 때는 .으로 접근
console.log(Math.PI);
console.log(Math.max(1,2,3,4,5));
//메서드 접근

//내장 객체 process
console.log("process obj");
console.log(process);
console.log(process.version, process.platform);

// var.let, const
console.log("==== var, let, const");
var testVar = 10; //es6이전 변수 할당법 -> web에서는 당분간 이것만 쓰기

//es6 이후 버전에서는 let과 const
let testLet = "let"; //재할당 가능 변수
const testConst = "const"; //재할당 불가 , 상수로 활용, 선언과 동시에 할당

/*
-es6가 지원되는 환경에서는 var,const를 활용
-const 먼저 생각 -> 만약 데이터 변경되어야 할 것이라면 let으로 변경
*/

//JAVAsCRIPT는 동적 타이핑 언어
//데이터가 할당되었을때 그 타입이 결정된다
let v;
//데이터 타입을 확인 ->typeof 키워드를 활용
console.log("v is", typeof v);
v = "String";
console.log("v is", typeof v); //어떤 타입이든 할당 가능
v = 2019;
console.log("v is", typeof v);//동적 타이핑 언어
//항상 변수와 type를 잘 확인해야 한다
