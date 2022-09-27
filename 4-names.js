/*
A valuable lesson learned is that whtever we put in
the exports property can be shared globally.
*/

//share
const ngwenya = "ngwenya"
const peter = "peter"

//local
const secret = "SUPER SECRET"

module.exports = {ngwenya, peter}