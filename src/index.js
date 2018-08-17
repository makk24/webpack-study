// import _ from 'lodash';
// import './style.css';
// import Icon from './icon.png';
// import Data from './data.xml';
// import printMe from './print';
import { cube } from './math.js';

function component() {
  var element = document.createElement('div');
  let btn = document.createElement('button');
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // let myIcon=new Image();
  // myIcon.src=Icon;
  // element.appendChild(myIcon);

  //console.log(Data);

  btn.innerHTML = 'Click me and check the console!';
  //btn.onclick=printMe;
  element.appendChild(btn);

  var element_1 = document.createElement('pre');

  // lodash 是由当前 script 脚本 import 导入进来的
  element_1.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element_1.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  element.appendChild(element_1);
  return element;
}

document.body.appendChild(component());

if(module.hot){
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    //printMe();
  })
}