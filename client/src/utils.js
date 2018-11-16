import yuchg from 'yuchg'
import CryptoJS from 'crypto-js'
import $ from "jquery"

const localServer = true
function serverIp() {
  return localServer ? "http://localhost:7781" : "https://orion6.uorion.com"
}

const utils = {
  sha256: function(text) {
    return CryptoJS.SHA256(text).toString(CryptoJS.enc.Hex)
  },
  ajaxPost: function (option) {
    $.ajax({
      url: serverIp() + option.url,
      type: "POST",
      data: {data: JSON.stringify(option.data)},
      dataType: "json", //指定服务器返回的数据类型
      success: function(data) {
        option.success(data)
      }
    })
  },
  ajaxGet: function (option) {
    $.ajax({
      url: serverIp() + option.url,
      type: "GET",
      dataType: "json", //指定服务器返回的数据类型
      success: function(data) {
        option.success(data)
      }
    })
  }
}

export default utils
