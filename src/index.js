module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = [];
  const BRACKETS_PAIR = {};
  for (let a = 0; a < bracketsConfig.length; a++){
          let key = bracketsConfig[a][1];
          let value = bracketsConfig[a][0];
          OPEN_BRACKETS.push(bracketsConfig[a][0]);
          BRACKETS_PAIR[key] = value;
      }
  let stack = [];
  for (let i = 0; i < str.length; i++){
      let currentSymbol = str[i];
      let topElement = stack[stack.length - 1];
      if (currentSymbol === BRACKETS_PAIR[currentSymbol] && currentSymbol == topElement){
          stack.pop()
      } else if (OPEN_BRACKETS.includes(currentSymbol)){
          stack.push(currentSymbol);
      } else {
          if (stack.length === 0) {
              return false;}
          if(BRACKETS_PAIR[currentSymbol] === topElement){
           stack.pop();
          } 
      }
  
}
return stack.length === 0;
}
