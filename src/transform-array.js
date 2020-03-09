module.exports = function transform( arr ) {
    if( !Array.isArray(arr)) throw new Error;
    var res=[];
    for ( var i = 0 ; i < arr.length; i++)
    {
        if( arr[i] == undefined) continue;
        
        switch (arr[i])
        {
            case "--discard-next":
                i++;
                break;
            case "--discard-prev":
                res.pop();
                break;
            case "--double-next":
                res.push(arr[i+1]);
                break;
            case "--double-prev":
                res.push(arr[i-1]);
                break;
            default:
                res.push(arr[i]);
                break;
        }
    }
    return res;
};

