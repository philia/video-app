'use strict'

var queryString = require('query-string')
var _ = require('lodash')
var request = {}
var config = require('./config')
var Mock = require('mockjs')

request.get = function(url,params){
  console.log("调用request GET方法")
  if (params) {
    url += '?' + queryString.stringify(params)
  }

  console.log("调用request GET方法1")
  return fetch(url)
    .then((response) => response.json())
    .then((response) => Mock.mock(response))
}

request.post = function(url,body){
  var options = _.extend(config.header, {
    body: JSON.stringify(body)
  })

  return fetch(url, options)
    .then((response) => response.json())
    .then((response) => Mock.mock(response))
}
module.exports = request