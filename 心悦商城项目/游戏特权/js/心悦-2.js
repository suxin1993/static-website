/**
 * 活动模块边框鼠标移入事件
 */
 $(function () {
   $('.hd ul li').mouseenter(function () {
  $(this).css({
    border:'1px solid #f06a45'
  })
})
   $('.hd ul li').mouseleave(function () {
     $(this).css({
       border:'1px solid #cecdd2'
     })
   });
   $('.next').children('a').mouseenter(function () {
     $(this).css({
       backgroundColor:'#468dff',
       color:'#ffffff'
     })
   }) ;
   $('.next').children('a').mouseleave(function () {
     $(this).css({
       backgroundColor:'',
       color:'#666'
     })
   })
  $('.left-top').mouseenter(function () {
    $(this).find('img').attr('src','img/bg-ot.png')
  })

   $('.left-top').mouseleave(function () {
     $(this).find('img').attr('src','img/bg-o.png')
   })

   $('.left-bottom').mouseenter(function () {
     $(this).find('img').attr('src','img/bg-th.png').css({
         width :220,
         height : 80
     })
   })

   $('.left-bottom').mouseleave(function () {
     $(this).find('img').attr('src','img/bg-t.png')
   })


})