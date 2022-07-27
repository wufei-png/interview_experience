// function cal(num1, num2) {
//   alert('1、加法计算\n' + '2、减法计算\n' + '3、乘法计算\n' + '4、除法计算\n')
//   var num = prompt('请输入您的选项：')
//   switch (num) {
//       case '1':
//           alert(num1 + num2);
//           break;
//       case '2':
//           alert(num1 - num2);
//           break;
//       case '3':
//           alert(num1 * num2);
//           break;
//       case '4':
//           alert(num1 / num2);

//   }
// } 
// console.log(cal(1, 2));
async function stop_n(n){
  return new Promise(
    resolve => {
    setTimeout(()=>{
      console.log('wf');
      resolve(console.log("暂停 %d ms" ,n));
    },n);
  }
  )
}
async function test(){
  console.log('1');
  var a=await stop_n(1000);
  console.log(typeof(a));
  console.log('2');
}
test();
//   a=[1,2,3]
// console.log(a.splice(1,1));
// console.log(a);
