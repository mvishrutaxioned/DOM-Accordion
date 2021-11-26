$(document).ready(() => {
    console.log('ready')

    $('.accordion li').each(function(index, acc) {
        $(this).click(function(e){
            e.preventDefault();

            $('.accordion li div').each(function(num, li) {
                $(this).slideUp()
                if(num == index) {
                    $(this).slideToggle()
                }
            })
        })
    })
})