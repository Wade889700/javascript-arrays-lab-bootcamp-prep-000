// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield']

function  destructivelyAppendKitten(){
  
}

function appendKutten(element){
    var kittens1 = [kittens,...element]
    return kittens1
}
function destructivelyAppendKitten(element){
  return kittens.push(element)
}

function destructivelyPrependKitten(element){
  kittens.unshift(element)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
} 

function appendKitten(element){
var kittens1 = [...kittens,element]
return kittens1
}

function prependKitten(element){
  var kittens1 = [element ,...kittens]
return kittens1
}

function removeLastKitten(){
  var kittens1 = kittens
  kittens1.pop() 
  return kittens1

function removeFirstKitten(){
  var kittens1 = kittens
  kittens1.shift() 
  return kittens1