function solution(arr) {
  let string = "";

  arr.forEach((item) => {
    const reuslt = (string += item);
  });

  return string;
}
