var recipes = {};

function updateObjectWithKeyAndValue(object,key,value){
  object[key] = value;
}

function updateObjectWithKeyAndValue(object,key,value){
  var newObject = object;
  Object.assign(newObject,key,value);
  return newObject;
}
