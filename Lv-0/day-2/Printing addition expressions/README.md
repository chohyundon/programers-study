## 문제 풀면서 중요한 점

1. template literal
   변수의 값을 그대로 가져와서 사용한다
   근데 타입까지 같이 가져온다
- 
   ex) const a = '1' , const b = 2
   console.log(`${a + b}`)를 찍어보면 12가 나오는 것을 볼 수 있다
