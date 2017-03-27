// JavaScript Document

$(function(){
	
	var a=0;  var flag=0;  var flag02=0;
	$("#notice-tit li div").attr("id","close");
 
     function anew(acont){
	  var div1="<li><a href='javascript:;'>"+acont+"</a><div id='close'></div></li>";
	  var $html1= div1;
	  return $html1;   }
	   
     function bnew(bcont){
	    var div2='<iframe style="display:block;" src="ManagePage/'+bcont+'.html" scrolling="yes"></iframe>';
	  var $html2= div2;
	  return $html2;   }
	  
	  
  $("#list ul li").bind("click", function() {
    var ab = $(this).text();  var Arrtext=[],inx;
	var chdiv=$("#notice-con iframe");
    var chlist=$("#notice-tit ul li");	
 
	for (i=0;i<chlist.length;i++){
	 Arrtext.push($(chlist[i]).children().text());
	if(Arrtext[i].indexOf(ab)>-1){ inx=i; }
	}
 
  if(Arrtext.toString().indexOf(ab)>-1){ flag=1; } 
   else{ flag=0; }

 
   if(flag==1){
   	 chlist.siblings("li").removeAttr("class").eq(inx).addClass("select");
	 chdiv.siblings("iframe").css("display","none").eq(inx).css("display","block");
	 }
  else if(flag==0){ 
	 $("#notice-tit ul").append(anew(ab)); 
     $(".notice-con").append(bnew(ab));  
   }  
				
});


  
  $("body").on("click","#close",function(){
	var wa= $(this).parent(this).index();
	  $(".notice-con iframe").css("display","none").eq(wa).remove("iframe");
	  $(this).parent(this).remove("li");

/*	flag02=1; 	 
	if($(this).parent(this).next().length>0 && flag02==1){
		nat.eq(wa).css("bcakground","red");
		$(".notice-con div").css("display","none").eq(wa+1).css("display","block");
	  $(".notice-con div").css("display","none").eq(wa).remove("div");
	  $(this).parent(this).remove("li");
		}
	else if($(this).parent(this).next().length<=0 && flag02==1){
		$(this).parent(this).prev().attr("class","select"); 
		$(".notice-con div").css("display","none").eq(wa-1).css("display","block");
	  $(".notice-con div").css("display","none").eq(wa).remove("div");
	  $(this).parent(this).remove("li");
		
		}  */
	
	   });
   
   $("body").on("click","#notice-tit ul li",function(){
     var tet=$("#notice-tit ul li");
	 var divs2=$(".notice-con iframe");
	 var index = $(this).index(); 
	  for(var j=0;j<tet.length;j++){ tet[j].className=''; }  
      $(this).addClass("select");  
	  if(index!=-1){ divs2.css("display","none").eq(index).css("display","block"); }
	  	 
   });
  
  $("#list ul li").bind("click", function() { 
        var tat=$("#notice-tit ul li");	 console.log("flag02  :"+flag02);
		var divs1=$(".notice-con iframe");   
	if(	flag==0){ for(var j=0;j<tat.length;j++){  tat[j].className='';} 
	 	divs1.css("display","none").eq(tat.length-1).css("display","block");
		tat.eq(tat.length-1).addClass("select");		
	 }
	 
   });
	 
	   
  
});
