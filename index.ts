const a: number = parseInt(prompt('A: ')); const b: number = parseInt(prompt('B: ')); const c: number = parseInt(prompt('C: '));
if (
    (a < (b + c))
    && (b < (a + c)) 
    && (c < (a + b)) 
   ) { 
  document.write("true: é triângulo");
  } 
  else {
  document.write( "false: não é é um triângulo");
     }