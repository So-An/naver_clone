$('document').ready(function(){

    /*뉴스 헤드라인 롤링*/
    let flashHeight = $('.main_lt__newsFlash_box li').height();
    let num = $('.main_lt__newsFlash_box li').length;
    let max = flashHeight * num;
    let move = 0;
    function rollingTop(){    
        move += flashHeight;
        $('.main_lt__newsFlash_box').animate({"top": -move},500,function(){
            if(move >= max){
                $(this).css("top",0);
                move= 0 ;
            }
        })
    }
    setInterval(rollingTop,3000);
    /*=======================================================*/

    let originalHtml;
    $('.main_lt__press_box a').mouseover(function(){
        originalHtml = $(this).html();
        $(this).html(`
        <div class="press_box_hover">
            <div class="press_subscribe">구독</div>
            <div class="press_view">기사보기</div>
        </div>
        `);
    })

    $('.main_lt__press_box a').mouseleave(function(){
       $(this).html(originalHtml);
    })


});

