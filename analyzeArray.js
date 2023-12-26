function analyzeArray(arr) {
    let obj = { };
  
    // average
    let average = null;
    for(let i = 0; i < arr.length; i += 1) {
      average += arr[i];
      if(i === arr.length - 1){
        obj.average = average/arr.length;
      }
    }
  
    // min
    obj.min = null;
    for(let i = 0; i < arr.length; i += 1) {
      if(obj.min === null) {
        obj.min = arr[0];
      }
  
      if(arr[i] < obj.min) {
        obj.min = arr[i];
      }
    }
  
    // max 
    obj.max = null;
    for(let i = 0; i < arr.length; i += 1) {
      if(obj.max === null) {
        obj.max = arr[0];
      }
  
      if(arr[i] > obj.max) {
        obj.max = arr[i];
      }
    }
  
    // length
    obj.length = arr.length;
    
    return obj;
}
  
module.exports = analyzeArray;