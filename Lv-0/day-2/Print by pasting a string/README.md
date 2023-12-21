## ✅ 하면서 알게 된 것들

### 1. 배열 메서드 split

---

- split은 구분자를 이용하여 여러개의 문자열로 나누는 것을 말하는데
  ex) const str = 'The quick brown fox jumps over the lazy dog';
  위와 같은 str 문지열이 있다고 가정해보자
  const words = str.split(' ');
  console.log(words); 를 해보면
  Array ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
  이렇게 배열로 값이 나오는 것을 볼 수 있다

### 2. 배열 메서드 join

---

- join은 배열의 모든 요소를 하나로 합친다
  ex)const elements = ['Fire', 'Air', 'Water'];
  elements.join()
  'Fire,Air,Water'
