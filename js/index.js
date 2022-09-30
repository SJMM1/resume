$(window).on('load', function(){
    // var cnt = 0;
    // function addCnt(){
    //     cnt++;
    //     $('.outer .count').text(cnt+'%').css({

    //     })
    //     if(cnt==100) {
    //         clearInterval(cntSet);
            $('.outer').fadeOut(300)
    //     }
    // }
    // var cntSet = setInterval(addCnt, 20)
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
                    <p>홍루이젠 홈페이지의 메인 페이지와<br>서브 페이지(로그인, 회원가입, 메뉴)를<br>리뉴얼했습니다.<br>
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
$('.close').on('click', function(){
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

$('.close').hover(
    function(){
        $(this).addClass('fa-spin');
    },
    function(){
        $(this).removeClass('fa-spin');
    }
);

	
// 아이템
$('.find').on('click', function(){
    $(this).parent().append(`<div class='back'></div>`)
    
    var textBox = 
    `<div class="textBox">
        <p></p>
        <span class="textClose"><닫기></span>
    </div>`
    $(this).parent().append(textBox)
    
    $('.textBox').on('click', function(){
        $(this).remove()
        $('.back').remove()
    })

    var msg = "";
    if($(this).hasClass('key')){
        msg = "열쇠를 발견했다."
        $('.itemBox .item1').append(`<img src="./img/key.png" alt="key">`) 
        // 클릭방지
        $(this).off()
    }
    if($(this).hasClass('empty1')){
        msg = "아무것도 들어있지 않다."
    }
    if($(this).hasClass('exit')){
        msg = "출구인 것 같지만 잠겨있다."
    }
    if($(this).hasClass('note')){
        if($('.item1').hasClass('active')){
            msg = "열렸다! 서랍 안에서 쪽지를 발견했다."
            $('.item1 img').remove()
            $('.item1').removeClass('active')
            $('.itemBox .item1').append(`<img src="./img/note.png" alt="note">`) 
            $(this).off()
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
    var stop = setInterval(typing, 70)
})

$('.item').on('click', function(){
    if(!$('.item').hasClass('active') && $(this).children().length){
        $(this).addClass('active')
        if($(this).children().attr('alt')=="note"){
            
        }
    }
    else{
        $(this).removeClass('active')
    }
})