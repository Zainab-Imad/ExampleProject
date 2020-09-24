// function myFun(){
//     var txt = document.getElementById("theText").value;
//     var col = document.getElementById('theColor').value;
//     var rep = document.getElementById('toRep').value;
//     var siz = document.getElementById('theSize').value;
//
//     txt = txt.repeat(rep);
//     document.getElementById('output').innerText = txt;
//     document.getElementById('output').style.color = col;
//     document.getElementById('output').style.fontSize = siz + "px";
// });

$(document).ready(function(){
    $("#sub").click(function(){
        let x = $('#output');
        let r = $('#toRep').val();
        x.css({'color':$('#theColor').val(),'font-size':$('#theSize').val()+ 'px'});
        x.text($('#theText').val().repeat(r));
    });
});



