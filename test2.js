var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {
    let arr = [];
    let friend = []
    let package = [];
    let box  = [];

    for(i = 0; i < input.length; i++){
        box.push(input[i]);
        
        if(box.length == 4){
            package.push(box);
            box = [];
            if(package.length == 2){
                friend.push(package);
                package = [];
                if(friend.length == 2){
                    arr.push(friend);
                    friend = [];
                }
            }else{
                if(package.length == 1 && i == input.length - 1){
                    friend.push(package);
                    package = [];
                    if(friend.length == 1 && i == input.length - 1 ){
                        arr.push(friend);
                        friend = [];
                    }
                }
            }
        }else{
            if(i == input.length - 1  && box.length > 0){
                package.push(box);
                box = [];
                if(package.length <= 2){
                    friend.push(package);
                    package = [];
                    if(friend.length <= 2){
                        arr.push(friend);
                        friend = [];
                    }
                }
            }
        } 
    }
    return arr;
}

console.log(apples(input));
