//String 객체
const s1 = "Modern JavaScript"; //literal로 설정
const s2 = String("I like JavaScript, I like Java");
console.log(typeof s1, typeof s2);

//string은 유니코드 문자의 나열
//길이를 잡을 수 있음
console.log(s1, "Length=" , s1.length);

//문자열 추출
console.log(s1.charAt(7)); //7번 인덱스의 문자
console.log(s1[7]); // 배열처럼 접근 할 수 있다
console.log(s1.substr(7,10)); //7번인덱스부터 10글자
console.log(s1.substring(7,17)); //7번 인덱스부터 17이전까지
console.log(s1.substring(7)); //두번째 인자가 없을 경우 끝까지

//문자열 검색 메서드
console.log(s2.indexOf("Java")); //문자열 내에서 "java"문자열의 인덱스
let idx = s2.indexOf("Java");
console.log(s2.indexOf("Java", idx+1));//검색 범위 제한
idx = s2.indexOf("Java", idx+1);
console.log(s2.indexOf("Java", idx+1)); //검색 내용 없으면 -1
console.log(s2.lastIndexOf("Script")); //검색 방향이 뒤->앞
//결과 인덱스는 양수로


//문자열 치환
console.log(s1.replace("JavaScript", "ECMAScript"));
//문자열 치환 메서드 등은 원본 변경이 아니고 새 문자열을 만들어낸다
console.log("원본:", s1);
//좌우 공백 문자 제거:trim
const s3 = "         JavaScript   ";
console.log(s3.trim());

//-----------String관련된 내용 보충
/*Escape 문자 정리:
 \n:개행
 \t:탭문자
 \":쌍따옴표
 \':홑따옴표
 \`:백틱(ES6 규격)
 \$:달러기호(ES6규격)
 */

 let message = "Hello";
 message = "He said, \"I\'m home\"";
 console.log(message);
 //es66의 확장된 문자열 처리 방법
 //1.템플릿 스트림

 let temp = 24;
 //문자열을 현재온도는 oo도 입니다
 message = "현재 온도는" + temp + "도 입니다.";
 console.log(message);

 message = `현재 온도는 ${temp}도 입니다`; //es6
 console.log(message);

 //여러 줄 문자여루만들고자 할 때
 message = "ESS에서 여러 줄 문자열을 만드는 것\n쉽지 않습니다.";
 console.log(message);

 //ES6, 여러 줄 문자열 만들기
 message = `하지만 ES6에서는 
 아주 손쉽게 여러 줄 문자열을 
 만들 수 있습니다.`;
 console.log(message);
