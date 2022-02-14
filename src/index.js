const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


const morse={
    a: '.-',
    b: '-...',
    c:'-.-.',
    d:'-..',
    e:'.',
    f:'..-.',
    d:'-..',
    h:'....',
    i:'..',
    j:'.---',
    k:'-.-',
    l:'.-..',
    m:'--',
    n:'-.',
    o:'---',
    p:'.--.',
    q:'--.-',
    r:'.-.',
    s:'...',
    t:'-',
    u:'..-',
    v:'...-',
    w:'.--',
    x:'-..-',
    y:'-.--',
    z:'--..',
    ' ':'',
  };
  
  
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  
  function decode(str){
    let s ='';
    let j='';
  let arr=[];
     for(let i=0;i<str.length-1;i+=2){
       if(i%10===0&&i!=0&&i<str.length){
         s+=' ';
         console.log(i)
       }
      if(str[i]+str[i+1]==='11'){
        s+='-';
      }else if(str[i]+str[i+1]==='10'){
        s+='.';
      }else if(str[i]+str[i+1]==='**'){
        s+=' ';
        i+=10;
      }
       
    }
    arr.push(s)
    s=s.split(' ') 
   s.forEach((item)=>{
    j+=getKeyByValue(morse, item)
    })
    return j;
  };


module.exports = {
    decode
}