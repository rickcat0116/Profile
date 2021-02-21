;(function(window,document,$,undefined){

    let t=0;
    let logitech = {
        init:function(){
            this.headerFn();
            this.section01Fn();
        },
        headerFn:function(){

            $(window).resize(function(){
                headerWinW = $(window).width();
                if( headerWinW > 800 ){
                    $('.mobile-btn').removeClass('addClose');
                    $('.second-nav').removeClass('addBtn');
                }
            });


            $('.smooth-btn').on({
                click: function(){
                    $('.second-nav').addClass('addBtn');
                }
            });
            
            $('.close-btn').on({
                click: function(){
                    $('.second-nav').removeClass('addBtn');
                }
            });

            $('.mobile-btn').on({
                click: function(){
                    $(this).toggleClass('addClose');
                    $('.second-nav').toggleClass('addBtn');
                }
            });
            
            },

        section01Fn:function(){
            var cnt = 0;
            var n = $('#main #section01 .slide').length-2; //6
            var $slide = $('#main #section01 .slide');
            var $slideWrap = $('#main #section01 .slide-wrap');
            var $pageBtn = $('#main #section01 .slider-bar');
            var setId = null;
            var setId2 = null;
            var $second = 7; //4초 간격
            var tCnt = 0; 

            var winW = $(window).width();
            var winH = $(window).height();
            var $slide = $('#main #section01 .slide');
                
                function resizeFn(){
                    winW = $(window).width(); //리얼하게 너비
                    winH = $(window).height();//리얼하게 높이                    
                    $('#section01').css({ height:winH }); //리얼하게 적용
                    $slide.css({ width:winW });  //리얼하게 적요
                }
                setTimeout(resizeFn,10);

                $(window).resize(function(){
                    resizeFn();
                });


                /////////// slide ////////////////////////////////////////////////////////

                            //메인 슬라이드 함수
            function mainSlideFn(){               
                $slideWrap.stop().animate({left:-(100*cnt)+'%'},600, function(){
                    if(cnt>n-1){cnt=0;} //n개인경우 = n-1
                    if(cnt<0){cnt=n-1;} 
                    $slideWrap.stop().animate({left:-(100*cnt)+'%'},0);
                });
                //페이지버튼 함수 호출(매개변수)
                pageBtnFn(cnt);
            }

            //페이지 버튼(인디세이터 버튼) 이벤트 함수
            function pageBtnFn(z){
                z==n?z=0:z;     //n(4)
                z==-1?z=n-1:z;  //3=n(4)-1
                $pageBtn.removeClass('current');
                $pageBtn.eq(z).addClass('current');
            }

            //다음 슬라이드 카운트 함수
            function nextCountFn(){
                cnt++;
                mainSlideFn();
            }

            //이전 슬라이드 카운트 함수
            function prevCountFn(){
                cnt--;
                mainSlideFn();
            }

            //자동 플레이
            function autoTimerFn(){
                setId = setInterval(nextCountFn,1000*$second);
            }

            //버튼 이벤트 발생시 타이머 콘트롤 함수
            function timerFn(){
                tCnt=0;
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    tCnt++; //1초에 1씩증가 1 2 3 4 5
                    if(tCnt>$second){ //4초 후에
                        clearInterval(setId2);
                        nextCountFn();
                        autoTimerFn();
                    }
                },1000);
            }

            //페이지 버튼 이벤트
            $pageBtn.each(function(index){
                $(this).on({
                    click:function(event){
                        event.preventDefault();
                        clearInterval(setId);
                        timerFn();
                        pageBtnFn();
                        cnt = index;
                        mainSlideFn();
                    }
                });
            });
                

            //터치 스와이프 이벤트
            $('#main #section01').swipe({
                swipeLeft:  function(event){ //다음 슬라이드
                    event.preventDefault();
                    clearInterval(setId);
                    timerFn();
                   if(!$slideWrap.is(':animated')){
                        nextCountFn();
                   } 
                },
                swipeRight:  function(event){ //이전 슬라이드
                    event.preventDefault();
                    clearInterval(setId);
                    timerFn();
                    if(!$slideWrap.is(':animated')){                    
                        prevCountFn();
                    }
                }
            });

            setTimeout(autoTimerFn,10);
            },

  
    }
    logitech.init();

})(window,document,jQuery);