function solution(a, b) {
  let total1 = String(a) + String(b);
  let total2 = 2 * a * b;

  if (total1 > total2) {
    return Number(total1);
  } else {
    return total2;
  }
  return answer;
}
