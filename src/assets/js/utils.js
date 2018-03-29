/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-03-19 11:07:14
 * @Description: 工具方法
 */
/**
 * @param {String} date 最后更新的时间 eg：2018-03-27T00:54:34.860Z
 */
export const getDurTime = (date) => {
  var createAt = new Date(date);
  var time = new Date().getTime() - createAt.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) {
    return '';
  } else if (time / 1000 < 60) {
    return '刚刚';
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + '分钟前';
  } else if ((time / 3600000) < 24) {
    return parseInt(time / 3600000) + '小时前';
  } else if ((time / 86400000) < 31) {
    return parseInt(time / 86400000) + '天前';
  } else if ((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + '月前';
  } else {
    return parseInt(time / 31536000000) + '年前';
  }
}

export const setCookie = (name,value) => {
  const Days = 30;
  const exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

export const getCookie = name =>{
  if (!name) return '';
  const reg = new RegExp('(^|)' + name + '=([^;]*)(;|$)');
  const arr = document.cookie.match(reg);
  if (arr) {
    return decodeURI(arr[2])
  }
  return '';
}

export const delCookie = name => {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cval = this.getCookie(name);
  if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  document.write(document.cookie);
}

