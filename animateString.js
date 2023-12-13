function animate_string(id){
    // To get the html elements by its id
    let element  = document.getElementById(id);
    // Access the text node inside the element (assuming no oher children)
    var textNode = element.childNodes[0];
   //  Extractiing the initial text content of the text node
    var text = textNode.data;
    setInterval(function(){
        // Move the last charcter to the beginning of the string
        text = text[text.length-1]+text.substring(0,text.length-1);
        // update the text content of the text node with the modified string

        textNode.data = text;

    },100)
}