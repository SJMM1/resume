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

// 팝업창
$('.maparea').on('click', function(){
    $(this).next().addClass('on')
    $(this).parent().append(`<div class='backcolor'></div>`)
    
    // room2
    if ($(this).hasClass('skill')) {
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
    }

    // room3
    if ($(this).hasClass('portfolio')) {
        let book = 
        `<div id="flipbook">
            <div class="hard">
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
            </div>
            <div class="hard"></div>
            <div>
                <div class="pageWrap">
                    <h3>홍루이젠 리뉴얼 - 반응형</h3>
                </div>
            </div>
            <div>
                <div class="pageWrap rwdP">
                    <div>
                        <div class="overlay"></div>
                        <img src="./img/imac.png" alt="imac">
                    </div>   
                </div>
            </div>
            <div>
                <div class="pageWrap">
                    <div class="rwdT">
                        <div class="overlay"></div>
                        <img src="./img/ipad.png" alt="ipad">
                    </div>
                    <div class="rwdM">
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
    }

    // room4
    if ($(this).hasClass('contact')) {
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
        
        $('.btn1').on('click', function(){
            $('.send_message').css({display:"block"})
            $.ajax({
                type: "POST",
                url: 'https://script.google.com/macros/s/AKfycbyAihuRIBV2gKYPe6lzrjujfz2agTOmXUAQLBjGTA/exec',          
                success: function() {
                    $('.send_message').css({display:"none"})
                },
                error: function() {
                    alert('Error occured');
                }
            });
        })
    }
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

	
