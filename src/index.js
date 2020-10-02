module.exports = function check(str, bracketsConfig) {
  let check_arr = [];
  let tmp_arr = [];
  let tmp_str = str;
  let counter = 1;
  let counter_old  = 0;
  bracketsConfig.forEach( element => {
    check_arr.push(`${element[0]}${element[1]}`);
  });
  while (counter !== counter_old) {
    counter_old = counter;
    check_arr.forEach( element => {
      let k = -1;
      k = tmp_str.indexOf(element);
      if ( k > -1) {
        //console.log('1 = '+tmp_str);
        counter++;
        tmp_str = tmp_str.substring(0, k)+tmp_str.substring(k+2, tmp_str.length);
        //console.log('2 = '+tmp_str);
      }
    });
  }
  if (tmp_str === '') {
    return true;
  } else {
    return false;
  };
}