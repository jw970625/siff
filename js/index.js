$(document).ready(function(){

  //사이트맵 효과
  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".sitemap").slideToggle("fast");
  });

  //메인 이미지 효과
  let fadeContainer = $(".fade"),
      fadeImage = fadeContainer.find(".fade-items ul li"),
      fadePrev = fadeContainer.find(".fade-side .prev"),
      fadeNext = fadeContainer.find(".fade-side .next"),
      oldidx = 0,
      idx=0,
      fadeCount = fadeImage.length,
      interval = 4000;

  function fadeAni(idx){
    if(oldidx != idx){
      fadeImage.eq(oldidx).stop().fadeOut("300");
      fadeImage.eq(idx).stop().fadeIn("300"); 
    };
    oldidx = idx;
  };

  function fadeAuto(){
    fadeTimer = setInterval(function(){
      idx = (oldidx + 1) % fadeCount;
      fadeAni(idx);
    },interval);
  };
  fadeAuto();

  fadeContainer.mouseenter(function(){
    clearInterval(fadeTimer);
  })
  .mouseleave(function(){
    fadeAuto();
  });
  
  //메뉴효과
  $(".btn li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".tabContents div").removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn();
  });

  let cloneElement = $(".banner-slide").clone(true);
  $(cloneElement).appendTo(".banner");
});