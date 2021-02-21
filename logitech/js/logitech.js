;(function($,window,document,undefined){

    var logitech = {
        init:   function(){
            var that = this;
            that.section1Fn();
        },
        section1Fn:function(){

            var $smoothBtn = $('#main #section1 .smooth-btn');
            
            $smoothBtn.on({
                click:  function(e){
                    e.preventDefault();
                    var headerH = $('#header').height();
                    var url = $(this).attr('href');
                        $('html,body').stop().animate({ scrollTop:$( url ).offset().top-headerH },600,'easeInOutExpo');
                }
            });
                      
        },


    };

    logitech.init();


})(jQuery,window,document);