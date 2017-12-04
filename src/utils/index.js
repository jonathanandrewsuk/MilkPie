/**
 * source: https://marcellin.me/blog/javascript-camelize/
 * @param {string} str
 * @returns camelized string 
 */
const cosineSim = require('./cosine-sim')

// export function camelize(str) {
function camelize(str) {
    return str
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/\-(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/\-/g, '')
        .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
}
function lowercase(string) {
    return string.toLowerCase()
}
function cbtoa(input) {
    if(typeof window === 'undefined')
        return new Buffer(input).toString('base64')
    return btoa(input)
}
function uuid() {
    return cbtoa(new Date().getTime().toString()).replace('==', '')
}
/**
 * from "abcd" to "a b c d"
 * @param {*} string 
 */
function spacing(string) {    
    return string.replace(/(?!$)/ig, ' ').trim()
}
module.exports = {
    camelize,
    cosineSim,
    lowercase,
    spacing,
    uuid
}