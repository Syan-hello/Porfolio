     let id1 = document.querySelector("#id1");
     let id2 = document.querySelector("#id2");
     let id3 = document.querySelector("#id3");
     let id4 = document.querySelector("#id4");
     let id5 = document.querySelector("#id5");
     let id6 = document.querySelector("#id6");
     let id7 = document.querySelector("#id7");
     let id8 = document.querySelector("#id8");



    window.addEventListener("scroll",ueberwachung);
  
    function ueberwachung(){
        y = window.scrollY;
        if(y <= 600){
            id1.style.padding= "1rem";
            id1.style.color= "#4cc4f7";

        }else{
            id1.style.padding="0rem";
            id1.style.color= "#333";
        }
        if(y >= 600 && y <= 2000){
            id2.style.padding= "1rem";
            id2.style.color= "#4cc4f7";

        }else{
            id2.style.padding="0rem";
            id2.style.color= "#333";
        }
        if(y >= 2000 && y <= 3000){
            id3.style.padding= "1rem";
            id3.style.color= "#4cc4f7";

        }else{
            id3.style.padding="0rem";
            id3.style.color= "#333";
        }
        if(y >= 3000 && y <= 4500){
            id4.style.padding= "1rem";
            id4.style.color= "#4cc4f7";

        }else{
            id4.style.padding="0rem";
            id4.style.color= "#333";
        }

        if(y >= 4500 && y <= 7000){
            id5.style.padding= "1rem";
            id5.style.color= "#4cc4f7";

        }else{
            id5.style.padding="0rem";
            id5.style.color= "#333";
        }
        if(y >= 7000 && y <= 8000){
            id6.style.padding= "1rem";
            id6.style.color= "#4cc4f7";

        }else{
            id6.style.padding="0rem";
            id6.style.color= "#333";
        }
        if(y >= 8000 && y <= 8500){
            id7.style.padding= "1rem";
            id7.style.color= "#4cc4f7";

        }else{
            id7.style.padding="0rem";
            id7.style.color= "#333";
        }

        if(y >= 8500 ){
            id8.style.padding= "1rem";
            id8.style.color= "#4cc4f7";

        }else{
            id8.style.padding="0rem";
            id8.style.color= "#333";
        }
 
 
 
 


        console.log(window.scrollY); /*test console */
        /*console.log("fensterhoehe:"+browsery);
        console.log("bodyscroll:"+document.body.scrollTop); */

    }
 








