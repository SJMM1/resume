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

    $('.room').css({ width: $('.box').width() - $('.items').width() })
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
    
    // room1
    if ($(this).hasClass('about')) {
        
    }

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
                                size: 16
                            }
                        },
                        min: 0,
                        max: 100
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'SKILL',
                        font: {
                            size: 50,
                            weight: 'bold'
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
            <div>Page 1</div>
            <div>Page 2</div>
            <div>Page 3</div>
            <div>Page 4</div>
            <div class="hard"></div>
            <div class="hard"></div>
        </div>`
        $('.portfolioBox').append(book)
        $('#flipbook').turn({
            width: $('.room3').width() * 0.85,
            height: $('.room3').height() * 0.85
        });
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
})
$('.close').hover(
    function(){
        $(this).addClass('fa-spin');
    },
    function(){
        $(this).removeClass('fa-spin');
    }
);




	
