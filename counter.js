const bool = 30 > 20 
console.log(bool);
let data5;
console.log(data5);


let count = 0;
        function increaseCount(){
           if(count < 10) {
               count++;
               document.getElementById("count").innerHTML = count;
           } else {
               alert(`Count cannot exceed ${count}`);
           }
        }
        function decreaseCount(){
            if(count > 0) {
                count--;
                document.getElementById("count").innerHTML = count;
            } else {
                alert("Count cannot be less than 0");
            }
        }
        function reset(){
            count = 0;
            document.getElementById("count").innerHTML = count;
        }
        
        function auto(){
            let interval = setInterval(() => {
                if(count < 10) {
                    count++;
                    document.getElementById("count").innerHTML = count;
                } else {
                    clearInterval(interval);
                    alert(`Count cannot exceed ${count}`);
                }
            }, 1000);
        }