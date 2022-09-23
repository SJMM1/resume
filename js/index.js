// let d_width = 0; // 브라우저 가로
// let d_height = 0; // 문서 전체의 높이

function tmp() {
    // container의 가로사이즈(화면가로 * box 개수)
    let con_width = $(window).outerWidth() * $('.box').length; 

    $('.container').css({
        width: con_width,
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0
    });

    $('.box').css({
        width: con_width / $('.box').length,
        height: '100vh',
        float: 'left'
    });

    $('.room').css({
        width: $('.box').width() - $('.items').width()
    })

    // box들을 위로 끌어올렸기 때문에 body의 높이는 100vh나 마찬가지인 상태. 
    // 그래서 억지로 전체 box들의 세로크기 만큼 body에 줘야한다.(스크롤 내리기위함) 
    // 이때 높이는 가로영역의 비율과 동일하게 준다. (이후 리미트를 주게 됨으로써 비율의 값이 정해진다.)
    $('body').css({
        height: '100vh'
    });

    // let w_width = $(window).width(); // 화면의 가로값
    // let w_height = $(window).height() // 화면의 세로값

    // 스크롤 될때의 리미트
    // d_width = con_width - w_width; // 전체 가로값 - 현재 화면의 가로값
    // d_height = $('body').height() - w_height // 전체 세로값 - 현재 화면의 세로값
}

tmp();
$(window).resize(function(){
    tmp();
})

let chk = true;
$('.box').on('mousewheel DOMMouseScroll', function(){
    if(chk) {
        // 휠 일정시간동안 막기
        chk = false;
        setTimeout(function(){
            chk = true;
        }, 500)

        // 휠 방향 감지(아래: -120, 위: 120)
        let w_delta = event.wheelDelta / 120;
        
        // 휠 아래로
        if(w_delta < 0 && $(this).next().length > 0) {
            $('.container').animate({
                left: -$(this).width() * ($(this).index()+1)
            }, 500)
        }
        // 휠 위로
        else if(w_delta > 0 && $(this).prev().length > 0) {
            $('.container').animate({
                left: -$(this).width() * ($(this).index()-1)
            }, 500)
        }
    }
});


$('img[usemap]').rwdImageMaps();




// gallery
$('#gallery').on('click',function(){
    $(this).parent().append(`<div class='backcolor'></div>`)
    $('.backcolor').css({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)'
    })
    $(".book_wrap").addClass('on')

    let book = `<div id="flipbook">
                    <div class="hard">PORTFOLIO</div>
                    <div class="hard"></div>
                    <div>Page 1</div>
                    <div>Page 2</div>
                    <div>Page 3</div>
                    <div>Page 4</div>
                    <div class="hard"></div>
                    <div class="hard"></div>
                </div>`
    $('.book_wrap').append(book)
    $('#flipbook').turn({
        width: 800,
        height: 600
    });
})

$('.book_close').on('click', function(){
    $(".book_wrap").removeClass('on')
    $('.backcolor').remove()
    $('#flipbook').remove()
})


