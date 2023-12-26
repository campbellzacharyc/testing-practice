function calculator(x, oper, y){
    if(oper === '+'){
      return x + y;
    }
    else if(oper === '-'){
      return x - y;
    }
    else if (oper === '/'){
      return x / y;
    }
    else if (oper === '*'){
      return x * y;
    }
    return 'error';
  }
  
  module.exports = calculator;