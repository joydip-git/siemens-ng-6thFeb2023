function call() {
    var allBrs = new Array()
    for (var i = 0; i < 5; i++) {
        var brElement = document.createElement('br')
        allBrs.push(brElement)
    }
    var textNodeObj = document.createTextNode('welcome to JS')

    document.body.append(...allBrs, textNodeObj)
    //document.write()
}