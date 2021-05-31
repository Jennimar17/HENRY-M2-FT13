var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl)
  if(startEl.children.length > 0) {
    for(let el of startEl.children) {
      const resultado = traverseDomAndCollectElements(matchFunc, el)
      resultSet = [...resultSet, ...resultado]
    }
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === '#') {
    return 'id';
  }
  if(selector[0] === '.'){
    return 'class';
  }
  if(selector[0] !== '.' && selector.includes('.')) {
    return 'tag.class';
  }
  if (selector[0] !== '#' && selector[0] !== '.') {
    return 'tag';
  }  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {//invoca la funcion anterior, me retorna id o class o tag
  var selectorType = selectorTypeMatcher(selector);

  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = el => {
      return '#' + el.id === selector//se compara el elemento html vs el selector
    }
   
  } else if (selectorType === "class") {
    matchFunction = el => {
      var classes = el.classList;
      for (var i = 0; i < classes.length; i++) {
        if('.' + classes[i] === selector){
        return true   
        }     
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = el => {
      var [tag, clase] = selector.split('.');
      return matchFunctionMaker(tag)(el) && matchFunctionMaker('.' + clase)(el);
      matchFunctionMaker(tag)
      matchFunctionMaker('.' + clase)(el)
    }
   
    
  } else if (selectorType === "tag") {
    var matchFunction = el => {
      return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());
    };    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
