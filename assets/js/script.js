$(document).ready(function(){

    $("a").click(function(){
        var gato = this.hash;

        $("html, body").animate({
            scrollTop: $(gato).offset().top

        },
        1500);
        
    });

    $(document).scroll(function(e){
        const y = $("html").scrollTop();

        if(y > 870) $("nav").addClass("navbar-light bg-calipso").removeClass("navbar-dark");
        else $("nav").removeClass("navbar-light bg-calipso").addClass("navbar-dark");

    });

    
});