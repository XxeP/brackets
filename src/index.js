module.exports = function check(str, bracketsConfig) {
    var array = []
        temp = str
    for(var i = 0; i < bracketsConfig.length; i++) {
        array[bracketsConfig[i][1]] = bracketsConfig[i].join('');
    }

    for (var j = 0; j < str.length; j++) {
        if(array[str[j]] != undefined) {
            temp = temp.replace(array[str[j]], '');
       }
    }
    
    if (temp.length == 0) {
        return true;
    } else {
        return false;
    }
}