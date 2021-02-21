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
            
            }
    }
    logitech.init();

})(window,document,jQuery);