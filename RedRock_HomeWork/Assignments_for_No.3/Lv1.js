function myPush(arr1,arr2){
  //你的代码
  //向arr1数组末尾添加arr2中元素
  //按顺序
  arr1.length+=arr2.length;
  for(let i=0;i<arr2.length;i++){
    arr1[arr1.length+i]=arr2[i];
  }
    return arr1;
}

//测试代码，比如向下面的arr尾部增加2
let arr1 = [1];
let arr2 =[2];
console.log(myPush(arr1,arr2));//myPush操作
//结果 [1,2]
