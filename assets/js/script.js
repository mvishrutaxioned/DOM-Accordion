$(document).ready(() => {

    var openSlide = -1;

    $('.accordion li').each(function(index, acc) {
        $(this).click(function(e){
            e.preventDefault();
            
            $(this).find('div').slideToggle()
            $(this).find('h2').toggleClass('show')

            if(openSlide > -1) {
                var list = $('.accordion li').eq(openSlide)
                list.find('div').slideUp();
                if(list.find('h2').hasClass('show')) list.find('h2').removeClass('show')
            }
            openSlide = index
        })
    })
})