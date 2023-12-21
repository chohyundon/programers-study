## 하면서 깨달았던 것들

### rest parameter

- rest parameter란 말 그대로 나머지를 다 가져올 수 있는 문법이다
  ex)
  function foo(..rest) {

  console.log(rest);
  }

  foo(1,2,3,4)

  - 위 상태를 호출하면 1234가 다 나오는 것을 볼 수 있다
  - rest parameter는 반환하는 모든 값들이 배열로 반환된다는 주의점이 있다

- 배열을 순회하기

1.  for of
2.  forEach
3.  map
4.  for
    배열중에 유사 배열이 있을 수 있는데 이는 Array.from을 통해 배열로 만들어서 배열 메서드 사용이 가능해진다
