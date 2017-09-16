var recipes = {};

function updateObjectWithKeyAndValue(object,key,value){
  object[key] = value;
}

function updateObjectWithKeyAndValue(object,key,value){
  var newObject = Object.assign{{},object};
  Object.assign(newObject,key,value);
  return newObject;
}
