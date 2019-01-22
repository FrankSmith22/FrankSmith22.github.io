var L = {};
L.attachAllElementsById = function(here){
    let allElements = document.getElementsByTagName('*');
    [].forEach.call(allElements, function(element){
        if(element.id){
            here[element.id] = element;
        }
    });
};