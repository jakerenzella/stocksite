$(document).ready(function () {
  $('#search').click(function() {
    $.ajax({
        type: 'GET',
        url: 'results.htm',
        data: $('#stockDetails').serialize(),
        dataType:"json", //to parse string into JSON object,
        success: function(data){

            var table = document.getElementById("stockTable");
            while(table.rows.length > 1) {
                table.deleteRow(1);
            }

            if(data){
                var len = data.length;
                var txt = "";
                if(len > 0){
                    for(var i=0;i<len;i++){
                        if(data[i].id){
                            txt += "<tr><td>"+data[i].id+"</td><td>"+data[i].name+"</td><td>$"+data[i].price+"</td><td>"+data[i].stock_level+"</td></tr>";
                        }
                    }
                    if(txt != ""){
                        $("#stockTable").append(txt).removeClass("hidden");
                    }
                }
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('error: ' + textStatus + ': ' + errorThrown);
        }
    });
    return false;//suppress natural form submission
});
});


