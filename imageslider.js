let img_array=['a.jpg','b.jpg','c.jpg','d.jpg','e.jpg']
let array_length=img_array.length
let i=0
let set=setInterval(slider,5000)
//slider -> user define function
//  5000 -> 5 seconds

function slider(){
    i++
    i=i%array_length
    // i=0%5=0
    //   1%5=1
    //   2%5=2
    //   3%5=3
    //   4%5=4
    //   5%5=0
    document.getElementById('image').src="images/"+img_array[i]
   
}

function next(){
    i++
    i=i%array_length
    document.getElementById('image').src="images/"+img_array[i]
}

function prev(){
    i--
    if(i<0){
        i=array_length-1
    }
   
    document.getElementById('image').src="images/"+img_array[i]
}

function stops(){
    clearInterval(set)
}

function starts(){
    set=setInterval(slider,5000)
}