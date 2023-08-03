module.exports={
    convertArray:function(arry){
     return arry.map(item=>item.toObject())
    },
    convertObject:function(obj){
        return obj.toObject();
    }

}