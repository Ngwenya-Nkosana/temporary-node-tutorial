/*
npm - global command,comes with node
npm -- version : to check which version you are using

local dependency -  use it in ny project
npm i <packageName>

global dependency - use it in any pproject
npm install -g <packageName>
sudo npm install -g <packageName> (mac)

package.json - mnifest file(stores important info about projects/package)
manual approach (create package.json in rooot, create properties etc)
npm init (step by step enquiry, press enter to skip)
npm init -y (everything is installed by default)
*/

const _= require("lodash")

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)