
let numberArray = [2, 6, 9, 12, 15, 18, 22, 32]

function insertNumber(num) {
    let len=numberArray.length;
    let mid=Math.floor(len/2);
    if(numberArray[mid]<num){
      for(let i=mid+1;i<numberArray.length;i++){
        if(numberArray[i]>num){
            numberArray.splice(i,0,num);
            return numberArray;
        }
      }
    }
    else{
        for(let i=0;i<mid;i++){
            if(numberArray[i]>num){
               numberArray.splice(i,0,num);
               return numberArray;
            }
          }
    }  
    return numberArray;

}

console.log(insertNumber(20))
//numberArray = [2, 6, 9, 12, 15, 18, 20, 22, 32]