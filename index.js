function min(...c){
    var a = c;
    var b = c.length;
    minimum = a[b -1];
    while(b--){
        if(a[b]<minimum){
            minimum = a[b];
        }
    }
    return minimum;
}
document.getElementById('res').value = min(4,6,8,9,34);