import _ from 'loadsh'
import './style.styl';
import Icon from './111.png'
function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到现有的div
  var myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon);
  return element;
}
document.body.appendChild(component());