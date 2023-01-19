function solution(s) {
  return (s.length === 4 || s.length === 6) && s.split('').every(v => !isNaN(v))
}

/*
function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
*/