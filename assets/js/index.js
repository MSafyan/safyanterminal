// const axios=require('axios')

$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    
    event.preventDefault();
    
    var unindexed_array = $(this).serializeArray();
    var data = {}
    
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
    alert(data);
console.log(data)
// https://safyanterminal.herokuapp.com


        axios.put(`https://safyanterminal.herokuapp.com/api/${data.id}`,{
            "rating":data.rating
        }).then(e=>e).catch(e=>e)


})

// if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        console.log(id)
        axios.get(`https://safyanterminal.herokuapp.com/api/cart/${id}`).then(e=>e).catch(e=>e)


        if(confirm("Do you really want to add to cart")){
                alert("added to cart Successfully!");
        }

    })
// }