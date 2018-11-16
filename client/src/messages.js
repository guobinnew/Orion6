/**
 * Created by unique on 2018/11/14.
 */
import yuchg from 'yuchg'

const _messages = {
  common: {
    appTitle: {zh: '懒爸爸', en: 'Orion6'},
    placeholder: {zh: '请输入内容', en: 'Please input contents'},
    copyright: {zh: '©2018 Unqiue 版权所有', en: '©️2018 Unique All rights reserved.'}
  },
  nav: {
    welcome:  {zh: '首页', en: 'Welcome'},
    project: {zh: '项目', en: 'Project'},
    community: {zh: '社区', en: 'Community'},
    setting: {zh: '设置', en: 'Setting'},
    help: {zh: '帮助', en: 'Help'},
    about: {zh: '关于', en: 'About'},
  },
  welcome: {
    openProject: {zh: '打开游戏', en: 'Open Project'},
    newProject: {zh: '新建游戏', en: 'New Project'},
    searchPlaceholder: {zh: '搜索游戏', en: 'Search'},
  }
}

const messages = {
  zh: {},
  en: {}
}
for (let [key, value] of Object.entries(_messages)) {
  for (let [name, defs] of  Object.entries(value)) {
    for (let [lang, text] of  Object.entries(defs)) {
      let obj = messages[lang]
      if (!yuchg.isObject(obj)) {
        obj = {}
        messages[lang] = obj
      }
      let prop = obj[key]
      if (!yuchg.isObject(prop)) {
        prop = {}
        obj[key] = prop
      }
      prop[name] = text
    }
  }
}

export default  messages