var q =0,str = '',i = 0,count = 0;
var ref = 'the quick brown fox jumped over the lazy dog';
ref = ref.toUpperCase();
var val=[];
var nos=[];
$(document).ready(function(){
$('#press').keydown(function(event){

  if(String.fromCharCode(event.keyCode) == ref[i]){
    $('#msg').text("");
    val[0]=(new Date()).getTime();
    $('#time').text(val[0]);
      if(q == 0){
        val[1] = (new Date()).getTime();
        q = q+1;

      }
      else{
        diff = val[0] - val[1];
        val[1] = val[0];
        if(q == 1){
          str = String(diff);
          q = q+1;
        }
        else{
          str = str+','+String(diff);
        }
        $('#s').text(str);
        nos[i] = Number(diff);
    }
    i = i+1 ;
  }
  else if((event.keyCode == 8 /*|| event.keyCode == 8 || event.which == 8*/) && count >=0){
    count = count-1;
    $('#msg').text("");

  }
  else{
    $('#msg').text("please enter correct value");
    count = count+1 ;
  }
});
$("#button1").click(function(){
  if(str.split(",").length == 43){
    $.ajax({
      type: "post",
      url: "/message",
      dataType:"text",
      data:{
        val : str,
        naam : $('#name').val()
      },
      success:function(valu){
        if(valu == "saved"){
          $("#time").text("sucessfully saved to database");
        }
        else{
          $('#name').val(valu);
        }
      }
    });
  }
  else{

  }
  str = "";
  q = 0;
  $('#press').val("");
  count = 0;
  i = 0;
  val = [];
  nos = [];
  document.getElementById("press").focus();
  document.getElementById("press").select();
});
});
window.onload = function(){
  var text_input = document.getElementById('name');
  text_input.focus ();
  text_input.select ();
}
