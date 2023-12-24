function solution(a, b) {
  let answer = 0;
  let par1 = String(a);
  let par2 = String(b);

  let result1 = Number(par1 + par2);
  let result2 = Number(par2 + par1);

  if (result1 > result2) {
    return result1;
  } else {
    return result2;
  }

  return answer;
}
