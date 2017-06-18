var insep = (function() {
  /* 
  * Shorthand window property variables
  */
  var doc = document;
  
  /* private variables
  *
  */
  
  
  //private methods DOM Manipulation
  
  /* _createElem
  * @Desc - creates an element that can have a class, attributes, and text
  * @param elem - String that represents an element tag name, ex: 'div' 'span' 'li'
  * @param classText - String of space seperated classes ex: 'category-text highlight'
  * @param text - String that represents the text of that element being created ex: 'Hello World!'
  * @return DOM Node
  */
  var _createElem = function(elem, classText, text) {
    var arg = arguments,
        elem = arg.length > 0 && arg[0] != undefined ? doc.createElement(arg[0]) : doc.createElement('div'),
        classText = arg.length > 0 && arg[1] != undefined ? elem.className = arg[1] : '',
        text = arg.length > 0 && arg[2] != undefined ? elem.textContent = arg[2] : '';
    
    return elem;
  };


  /* _appendTo
  * @Desc Appends a created Element to an existing DOM Node
  * @param elem - string that will query the DOM and find the existing DOM Node
  * @param createdElem - An element node that gets appended to the queried element
  */
  var _appendTo = function(elem, createdElem) {
    _queryElem(elem).appendChild(createdElem);
  };

  /* _queryElem
  * @Desc returns a queried DOM node
  * @param String context of what to search for in the DOM
  * @return DOM Node
  */
  var _queryElem = function(queryString) {
    return doc.querySelector(queryString);
  };


  /* _queryElemAll
  * @Desc returns a NodeList of DOM Nodes of same identifier
  * @param String context of what to search for in the DOM
  * @return NodeList
  */
  var _queryElemAll = function(queryString) {
    return doc.querySelectorAll(queryString);
  };



  //private methods for device detection and browser version detection


  /* _detectTouch
  * @Desc checks window object for present properties on device
  * @return Boolean
  */
  var _detectTouch = function() {
    return 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
  };


  /* _testStorage
  * @Desc checks if browser or device supports storage object
  * @return Boolean
  */
  var _testStorage = function() {
    try {
      var sessStore = sessionStorage;
      sessStore.setItem('test');
      sessStore.removeItem('test');
      return true;
    } catch (err) {
      return false;
    }
  };

  return {
    /* Public DOM Manipulation Methods */
    
    createElem: function(elem, classText, text) {
      return _createElem(elem, classText, text);
    },
    
    appendTo: function(elem, createdElem) {
      _appendTo(elem, createdElem);
    },
    
    queryElem: function(queryString) {
      return _queryElem(queryString);
    },
    
    queryElemAll: function(queryString) {
      return _queryElemAll(queryString);
    },
    
    /* Public Device and Compatability Detection*/

    detectTouch: function() {
      return _detectTouch();
    },
    testStorage: function() {
      return _testStorage();
    }
    
  }
})();
