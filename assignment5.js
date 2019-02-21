
    Array.prototype.insert = function ( index, item ) {
        this.splice( index, 0, item );
    };
    var arr = [ 11, 33, 34, 39];
    arr.insert(5, 44);

    for(var i=0;i<=arr.length;i++)
    {
        console.log(arr[i]);
    }
    function getMax(){
        var max=arr[0];
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]>max)
            {
                max=arr[i];
            }
        }
        return max;
    }
    function getMin(){
        var min=arr[0];
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]<min)
            {
                min=arr[i];
            }
        }
        return min;
    }
    function mean()
    {   var sum=0;
        for(let i=0;i<arr.length;i++){
            sum+=arr[i];

        }
        var meanOfArr=sum/arr.length;
        return(meanOfArr);
    }
    function mode(){
    
        var max= 0, maxCount = 0;
    
       for (let i = 0; i <arr.length; ++i) {
    
          let count1 = 0;
          
          for (let j = 0; j <arr.length; ++j) {
             if (arr[j] == arr[i])
             ++count1;
          }
          
          if (count1 > maxCount) {
             maxCount = count1;
             maxValue = arr[i];
          }
       }
    
       return max;
    }
    console.log("Max Value:"+getMax());
    console.log("Min Value:"+getMin());
    console.log("Mean :"+mean());
    console.log("Mode :"+mode());
