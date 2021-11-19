let arr=([7,9,0,-2]);
let temp=[];
function cal(array){
    for(let i=0;i<1;i++){
        if(array[i]){
            temp.push(array[i]);
             
        }
    }
  return temp; 
}
console.log(cal(arr));
