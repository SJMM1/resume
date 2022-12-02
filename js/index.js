// $(window).on('load', function(){
//     var cnt = 0;
//     function addCnt(){
//         cnt++;
//         $('.outer .count').text(cnt+'%').css({

//         })
//         if(cnt==100) {
//             clearInterval(cntSet);
//             $('.outer').fadeOut(300)
//         }
//     }
//     var cntSet = setInterval(addCnt, 20)
// })

$('.game_start').on('click', function(){
    $('.intro').hide();
})

function tmp() { 
    // container의 가로사이즈(화면가로 * box 개수)
    let con_width = ($(window).outerWidth() - $('.items').width()) * $('.box').length; 

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
}

tmp();
$(window).resize(function(){
    tmp();
})

let chk = true;

$('.box').on('mousewheel DOMMouseScroll', function(){
    if(!$('.pop').hasClass('on')) {
        if(chk) {
            // 휠 일정시간동안 막기
            chk = false;
            setTimeout(function(){
                chk = true;
            }, 500)
    
            // 휠 방향 감지(아래: -120, 위: 120)
            let w_delta = event.wheelDelta / 120;
            
            // 휠 아래로s
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
    } 
});

$('img[usemap]').rwdImageMaps();

// room1 팝업창
$('.maparea.about').on('click', function(){
    $('.aboutBox').addClass('on')
    $(this).parent().append(`<div class='backcolor'></div>`)
    
    $('.aboutBox').ripples({
        resolution: 512,
        dropRadius: 10,
        perturbance: 0.0001
    });
})

// room2 팝업창
$('.maparea.skill').on('click', function(){
    $('.skillBox').addClass('on')
    $(this).parent().append(`<div class='backcolor'></div>`)
    
    let chart = `<canvas id="skill"></canvas>`
    $('.skillBox > div').append(chart)
    new Chart($('#skill'), {
        type: 'polarArea',
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHOTOSHOP', 'ILLUSTRATOR'],
            datasets: [{
                label: 'SKILL',
                data: [85, 75, 65, 70, 60, 60],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                    'rgba(153, 102, 255, 0.3)',
                    'rgba(255, 159, 64, 0.3)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                r: {
                    pointLabels: {
                        display: true,
                        centerPointLabels: true,
                        font: {
                            size: 16,
                            family: 'Gowun Dodum'
                        }
                    },
                    // min: 0,
                    // max: 100
                    ticks : {
                        backdropColor: 'rgba(255, 255, 255, 0)',
                        font : {
                            size: 16,
                            family: 'Gowun Dodum'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    display: true,
                    labels: {
                        font: {
                            size: 16,
                            family: 'Gowun Dodum'
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'SKILL',
                    font: {
                        size: 50,
                        weight: 'bold',
                        family: 'Gowun Dodum'
                    }
                }
            }
        }
    });
})

// room3 팝업창
$('.maparea.portfolio').on('click', function(){
    $('.portfolioBox').addClass('on')
    $(this).parent().append(`<div class='backcolor'></div>`)
    
    let book = 
    `<div id="flipbook">
        <div class="hard">
            <div class="pageWrap">
                <h1>PORTFOLIO</h1>
                <div class="scene">
                    <div class="upper">
                    <div class="moon">
                        <div class="crater1"></div>
                        <div class="crater2"></div>
                    </div>
                    <div class="star1"></div>
                    <div class="star2"></div>
                    <div class="star3"></div>
                    <div class="cloud1">
                        <div class="circle"></div>
                        <div class="filler"></div>
                    </div>
                    <div class="cloud2">
                        <div class="circle"></div>
                        <div class="filler"></div>
                    </div>
                    <div class="tail">
                        <div class="left"></div>
                        <div class="right"></div>
                        <div class="body"></div>
                    </div>
                    <div class="drop"></div>
                    </div>
                    <div class="lower">
                    <div class="whale">
                        <div class="eye"></div>
                        <div class="detail1">
                        <div class="detail2"></div>
                        </div>
                    </div>
                    <div class="fin"></div>
                    </div>
                </div>
                <p><span>페이지를 넘겨주세요 <i class="fa-solid fa-arrow-right"></i></span></p>
            </div>
        </div>
        <div class="hard"></div>
        <div>
            <div class="pageWrap">
                <div class="blockquote">
                    <h2 class="center">홍루이젠<br>홈페이지<br>리뉴얼</h2>
                    <p>홍루이젠 홈페이지의 메인 페이지와<br>서브 페이지(로그인, 회원가입)를<br>리뉴얼했습니다.<br>
                    반응형으로 제작되었습니다.</p>
                </div>
                <button class="more_btn" onclick="window.open('https://sjmm1.github.io/hongruizhen/')"><span>Click!</span><span>바로가기</span></button>
            </div>
        </div>
        <div>
            <div class="pageWrap">
                <div class="rwdP rwd">
                    <div class="overlay"></div>
                    <img src="./img/imac.png" alt="imac">
                </div>   
            </div>
        </div>
        <div>
            <div class="pageWrap">
                <div class="rwdT rwdTM rwd">
                    <div class="overlay"></div>
                    <img src="./img/ipad.png" alt="ipad">
                </div>
                <div class="rwdM rwdTM rwd">
                    <div class="overlay"></div>
                    <img src="./img/iphone.png" alt="iphone">
                </div>
            </div>
        </div>
        <div>
            
        </div>
        <div class="hard"></div>
        <div class="hard"></div>
    </div>`
    $('.portfolioBox').append(book)
    $('#flipbook').turn({
        width: $('.room3').width() * 0.85,
        height: $('.room3').height() * 0.85
    });
})

// room4 팝업창
$('.maparea.contact').on('click', function(){
    $('.contactBox').addClass('on')
    $(this).parent().append(`<div class='backcolor'></div>`)
    
    let msg = 
    `<div class="formBox">
        <div class="send_message">메일을 보내고 있습니다.</div>
        <div class="thankyou_message">연락주셔서 감사합니다. 빠른 시일 내에 답변 드리겠습니다 🚀</div>
        <div class="btn">
            <button type="submit" class="btn1"><span>보내기</span></button>
            <input type="reset" value="취소"></input>
        </div>
    </div>`
    $('.formWrap').append(msg)
    
    // $('.btn1').on('click', function(){
    //     $('.send_message').css({display:"block"})
    //     $.ajax({
    //         type: "POST",
    //         url: 'https://script.google.com/macros/s/AKfycbzK6EsHzUldAq71aGELFy57ffCpg0TvKT5WxIqg2qL9TrnNXx95/exec',          
    //         success: function() {
    //             $('.send_message').css({display:"none"})
    //         },
    //         error: function() {
    //             alert('Error occured');
    //         }
    //     });
    // })
})

// 닫기
$('.room .close').on('click', function(){
    $(this).parent().removeClass('on')
    $('.backcolor').remove()
    if($(this).parent().parent().hasClass('room2')){
        $('#skill').remove()
    }
    if ($(this).parent().parent().hasClass('room3')){
        $('#flipbook').remove()
    }
    if ($(this).parent().parent().hasClass('room4')){
        $('.formBox').remove()
    }  
})
$('.itemPop .close').on('click', function(){
    $(this).parent().removeClass('on')
    $('.item').removeClass('active')
    $('.itemPop > div').remove()
})

$('.close').hover(
    function(){
        $(this).addClass('fa-spin');
    },
    function(){
        $(this).removeClass('fa-spin');
    }
);

// 아이템
$('body').on('click', '.textBox', function(){
    $(this).remove()
    $('.back').remove()
})

$('.find').not('.pass').on('click', function(){
    $(this).parent().append(`<div class='back'></div>`)
    
    var textBox = 
    `<div class="textBox">
        <p></p>
        <span class="textClose"><닫기></span>
    </div>`
    $(this).parent().append(textBox)
    
    let msg = "";
    if($(this).hasClass('goldkey')){
        msg = "열쇠를 발견했다."
        $('.itemBox .item1').append(`<img class='goldkeyimg' src="./img/goldkey.png" alt="goldkey">`) 
        // 클릭방지
        $(this).off()
    }
    if($(this).hasClass('empty1')){
        msg = "아무것도 들어있지 않다."
    }
    if($(this).hasClass('exit')){
        msg = "출구인 것 같지만 잠겨있다."
        if($('.silverkeyimg').parent().hasClass('active')){
            msg = "문이 열렸다!"
            $('.outer').fadeIn(2500)
        }
        else if($('.goldkeyimg').parent().hasClass('active') || $('.bluekeyimg').parent().hasClass('active')){
            msg = "맞지 않는 열쇠다."
        }
    }
    if($(this).hasClass('drawer')){
        msg = "잠겨있다. 열쇠로 열 수 있을 것 같다."
        if($('.bluekeyimg').parent().hasClass('active')){
            msg = "열렸다! 핸드폰을 발견했다."
            $('.item2 img').remove()
            $('.item2').removeClass('active')
            $('.itemBox .item2').append(`<img src="./img/phoneoff.png" alt="phone">`) 
            $(this).off()
        }
        else if($('.goldkeyimg').parent().hasClass('active')){
            msg = "맞지 않는 열쇠다."
        }
    }
    if($(this).hasClass('bluekey')){
        msg = "열쇠를 발견했다."
        $('.itemBox .item2').append(`<img class='bluekeyimg' src="./img/bluekey.png" alt="bluekey">`) 
        // 클릭방지
        $(this).off()
    }
    if($(this).hasClass('note')){
        if($('.goldkeyimg').parent().hasClass('active')){
            msg = "열렸다! 서랍 안에서 쪽지를 발견했다."
            $('.item1 img').remove()
            $('.item1').removeClass('active')
            $('.itemBox .item1').append(`<img src="./img/note.png" alt="note">`) 
            $(this).off()
        }
        else if($('.bluekeyimg').parent().hasClass('active')){
            msg = "맞지 않는 열쇠다."
        }
        else{
            msg = "잠겨있다. 열쇠로 열 수 있을 것 같다."
        }
    }

    let index = 0        
    function typing(){
        $('.textBox p').append(msg[index++])
        if(index >= msg.length){
            index = 0
            clearInterval(stop)
        }
    }
    var stop = setInterval(typing, 60)

    $(".item").css("height",$(".item").width()*1.5)
})

// 모양비밀번호
$('.pass1').on('click', function(){
    curPos = [0, 0, 0, 0]
    posValue = [0, 0, 0, 0]
    $('.itemPop').addClass('on')
    let pass = 
    `<div class="passWrap">
        <div class="passBox">
            <div>
                <button class="prev prev1">
                    <i class="fa-solid fa-caret-up"></i>
                </button>
                <div class="pw_img">
                    <div class="pw_img1">
                        <img src="./img/moon.png" alt="moon">
                        <img src="./img/heart.png" alt="heart">
                        <img src="./img/rec.png" alt="rec">
                        <img src="./img/clover.png" alt="clover">
                        <img src="./img/star.png" alt="star">
                    </div>
                </div>
                <button class="next next1">
                    <i class="fa-solid fa-caret-down"></i>
                </button>
            </div>
            <div>
                <button class="prev prev2">
                    <i class="fa-solid fa-caret-up"></i>
                </button>
                <div class="pw_img">
                    <div class="pw_img2">
                        <img src="./img/moon.png" alt="moon">
                        <img src="./img/heart.png" alt="heart">
                        <img src="./img/rec.png" alt="rec">
                        <img src="./img/clover.png" alt="clover">
                        <img src="./img/star.png" alt="star">
                    </div>
                </div>
                <button class="next next2">
                    <i class="fa-solid fa-caret-down"></i>
                </button>
            </div>
            <div>
                <button class="prev prev3">
                    <i class="fa-solid fa-caret-up"></i>
                </button>
                <div class="pw_img">
                    <div class="pw_img3">
                        <img src="./img/moon.png" alt="moon">
                        <img src="./img/heart.png" alt="heart">
                        <img src="./img/rec.png" alt="rec">
                        <img src="./img/clover.png" alt="clover">
                        <img src="./img/star.png" alt="star">
                    </div>
                </div>
                <button class="next next3">
                    <i class="fa-solid fa-caret-down"></i>
                </button>
            </div>
            <div>
                <button class="prev prev4">
                    <i class="fa-solid fa-caret-up"></i>
                </button>
                <div class="pw_img">
                    <div class="pw_img4">
                        <img src="./img/moon.png" alt="moon">
                        <img src="./img/heart.png" alt="heart">
                        <img src="./img/rec.png" alt="rec">
                        <img src="./img/clover.png" alt="clover">
                        <img src="./img/star.png" alt="star">
                    </div>
                </div>
                <button class="next next4">
                    <i class="fa-solid fa-caret-down"></i>
                </button>
            </div>
        </div>
    </div>`
    $('.itemPop').append(pass)

    $(".prev").attr("disabled", true)
})
let curPos = [0, 0, 0, 0]
let posValue = [0, 0, 0, 0]
const img_h = 182;

$("body").on('click', '.passBox > div .next',function(){
    let num = $(this).parent().index();
    if(curPos[num] < 4) {
        $(this).siblings(".prev").attr("disabled", false)
        posValue[num] -= img_h;
        $(this).siblings(".pw_img").children().css("top", posValue[num])
        curPos[num] += 1;
    }
    if(curPos[num] == 4) {
        $(this).attr("disabled", true)
    }
    answer1()
})
$("body").on('click', '.passBox > div .prev', function(){
    let num = $(this).parent().index();
    if(curPos[num] > 0) {
        $(this).siblings(".next").attr("disabled", false)
        posValue[num] += img_h;
        $(this).siblings(".pw_img").children().css("top", posValue[num])
        curPos[num] -= 1;
    }
    if(curPos[num] == 0) {
        $(this).attr("disabled", true)
    }
    answer1()
})

function answer1() {
    if(curPos[0] == 4 && curPos[1] == 3 && curPos[2] == 1 && curPos[3] == 2) {
        let msg="딸깍! 소리가 나며 잠금이 풀렸다. 안에서 보조배터리를 발견했다."
        $("body").off('click', '.passBox > div .prev')
        $("body").off('click', '.passBox > div .next')
        $('.pass1').off()
        $('.itemBox .item3').append(`<img src="./img/battery.png" alt="battery">`)
    
        let textBox = 
        `<div class="textBox">
            <p></p>
            <span class="textClose"><닫기></span>
        </div>`
        $('.itemPop').append(textBox)
        
        $('.textBox').on('click', function(){
            $(this).remove()
            $('.back').remove()
        })
    
        let index = 0        
        function typing(){
            $('.textBox p').append(msg[index++])
            if(index >= msg.length){
                index = 0
                clearInterval(stop)
            }
        }
        var stop = setInterval(typing, 60)
    }
}


//숫자비밀번호
$('.pass2').on('click', function(){
    $('.itemPop').addClass('on')
    let keyPw = 
    `<div class="passWrap">
        <div class="inputBox">
            <input type="text" maxlength="2" placeholder="•" value="">
            <input type="text" maxlength="2" placeholder="•" value="">
            <input type="text" maxlength="2" placeholder="•" value="">
            <input type="text" maxlength="1" placeholder="•" value="">
        </div>
    </div>`
    $('.itemPop').append(keyPw)
})

$("body").on('input', '.inputBox', function(){
    var elements = $(this).children(),
    str = "";
    
    elements.each(function(e){ 
        var val = $(this).val().replace(/[^0-9]/gi,''),
        focused = $(this).is(":focus"),
        parseGate = false;

        val.length==1?parseGate=false:parseGate=true; 

        $(this).val(val);

        if(parseGate&&val.length>1){ 
            var	exist = elements[e+1]?true:false; 
            exist&&val[1]?(
                elements[e+1].disabled=false,
                elements[e+1].value=val[1], 
                elements[e].value=val[0], 
                elements[e+1].focus() 
            ):void 0;
        } else if(parseGate&&focused&&val.length==0){ 
            var exist = elements[e-1]?true:false; 
            if(exist) elements[e-1].focus(); 
        }
        val==""?str+=" ":str+=val;
    });

    // 정답일때
    if(str == 13988) {
        let msg="딸깍! 소리가 나며 잠금이 풀렸다. 안에서 열쇠를 발견했다."
        $("body").off('input', '.inputBox')
        $('.pass2').off()
        $('.itemBox .item4').append(`<img class="silverkeyimg" src="./img/silverkey.png" alt="silverkey">`)
    
        let textBox = 
        `<div class="textBox">
            <p></p>
            <span class="textClose"><닫기></span>
        </div>`
        $('.itemPop').append(textBox)
        
        let index = 0        
        function typing(){
            $('.textBox p').append(msg[index++])
            if(index >= msg.length){
                index = 0
                clearInterval(stop)
            }
        }
        var stop = setInterval(typing, 60)
    }
})

$("body").on('click', '.inputBox', function(e) {
	var els = $(this).children()
    els.each(function(){
		while($(this).prev().val()==""){
			$(this).prev().focus();
			$(this) = $(this).prev();
		}
	})
});





$('.item').on('click', function(){
    if($(this).children().length){   
        if(!$(this).siblings().hasClass('active') || $(this).children().attr('alt')=="battery"){
            $(this).toggleClass('active')
        }
        else if(!$('.itemPop').hasClass('on')){
            $('.item').removeClass('active')
            $(this).addClass('active')
        }
    }
    if($(this).children().attr('alt')=="note" && !$(this).siblings().hasClass('active')){
        $('.itemPop').toggleClass('on')
        $('.itemPop > div').remove()
        $('.itemPop').append(`<div class="passWrap"><img src="./img/notePw.png" alt="note"></div>`)
    }
    if($(this).children().attr('alt')=="phone" && !$(this).siblings().hasClass('active')){
        $('.itemPop').toggleClass('on')
        $('.itemPop > div').remove()
        if($(this).children().hasClass('on')){
            var phone = 
            `<div class="passWrap">
                <img src="./img/phoneon.png" alt="phoneon">
            </div>`
        }
        else {
            var phone = 
            `<div class="passWrap">
                <img src="./img/phoneoff.png" alt="phoneoff">
                <div class="chargeBox">
                    <div class="charge"> 0%</div>
                </div>
            </div>`
        }
        $('.itemPop').append(phone)       
    }
    if($(this).children().attr('alt')=="battery" && $(this).hasClass('active') && $('.passWrap').children().attr('alt')=="phoneoff") {
        var cnt = 0;
        function addCnt(){
            cnt++;
            $('.charge').text(cnt+'%').css({
                width: cnt+'%' 
            });
            if(cnt==100) {
                clearInterval(cntSet)
                setTimeout(function() {
                    $('.passWrap').remove()
                    let phone = 
                    `<div class="passWrap">
                        <img src="./img/phoneon.png" alt="phoneon">
                    </div>`
                    $('.itemPop').append(phone)
                    $('.item2 img').addClass('on')
                }, 500);
            }
        }
        var cntSet = setInterval(addCnt, 30)
    }
})

$(".itemPop").css({
    "width":$(".box").width(),
    "height":$(".box").height()
})






