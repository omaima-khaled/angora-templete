$(window).scroll(function(){
    aboutOffset=$('#about').offset().top;
    wcsroll=$(window).scrollTop()
    console.log()
if(wcsroll > aboutOffset-100){
    //navbar background appear
    $('#navBar').css('backgroundColor' , 'rgba(0,0,0,0.6)')
    $('#navBar').addClass('pad')
   //arrow btton apper
    $('#up-btn').fadeIn(1000)
    ///animate progress
    $('.B1').css('width','80%')
    $('.B2').css('width','85%')
    $('.B3').css('width','95%')
    $('.B4').css('width','70%')
}
else{
      //navbar background hide
    
    $('#navBar').css('backgroundColor' , 'transparent')
    $('#navBar').removeClass('pad')
     //arrow btton hide
    $('#up-btn').fadeOut(1000)
    ////
    $('.B1').css('width','0%')
    $('.B2').css('width','0%')
    $('.B3').css('width','0%')
    $('.B4').css('width','0%')
}
})

//////////nav bar links
$("a[href^='#']").click(function(e){
   let ahref = $(e.target).attr('href')
   let secoffset=$(ahref).offset().top;
   $('html,body').animate({scrollTop:secoffset},500)
  

})
////////arrow up btton
$('#up-btn').click(function(){
    $('body,html').animate({scrollTop:0},1000)
})
/////// loading scereen
$(document).ready(function(){
    ///hide color box when opening site
    let colorBoxWidth=$('.colorBox').outerWidth();
    $('.colorOption').animate({left:-`${colorBoxWidth}`},1000)
    ////loading screen fadeout
    $('.sk-chase').fadeOut(1000,()=>{
        $('#lodeingPage').fadeOut(1000,()=>{
            $('#lodeingPage').remove();
            $('body').css('overflow-y','auto')
        })
    })
    
})
//////// scroll to top 
$('.arrowfooter').click(function(){
    $('body,html').animate({scrollTop:0},2000)
})
//////////// hide and apper side bar
let colorBoxWidth=$('.colorBox').outerWidth();
$('.setting-icon').click(function(){
  if($('.colorOption').css('left')=="0px"){
    $('.colorOption').animate({left:-`${colorBoxWidth}`},1000)
  }
  else{
    $('.colorOption').animate({left:`0px`},1000) 
  }

})
///////////// change color and it's effects
let colorItem=$('.color-item')
colorItem.eq(0).css("backgroundColor","rgba(0,0,0,0.5)")
colorItem.eq(1).css("backgroundColor","lightgreen")
colorItem.eq(2).css("backgroundColor","blue")
colorItem.eq(3).css("backgroundColor","yellow")
colorItem.eq(4).css("backgroundColor","tomato")
colorItem.eq(5).css("backgroundColor","green")
//////
colorItem.click(function(e){
  bgColor=  $(e.target).css("backgroundColor")
   $('h2,h3,p').css('color',bgColor)

})

