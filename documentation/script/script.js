$('document').ready(function(){

    if(window.location.hash){
        const elem= window.location.hash.replace('#', ''); 
        scroll(elem.trim())
    }

    function scroll(elem){
        const elemList= document.querySelectorAll(`[data-scroll]`)

        elemList.forEach(item=> {
            if(item.dataset.scroll===elem){
                item.classList.add('active')
            }
            else{
                item.classList.remove('active')

            }
        })

    
        window.location.hash=elem;
        
        $('.main').animate({
            scrollTop: $(`[data-tag=${elem}]`).offset().top
        }, '2000')
        
    }

    $('[data-scroll=introduction]').click(function(){
        scroll('introduction')
    })
    $('[data-scroll=packages]').click(function(){
        scroll('packages')
    })
    $('[data-scroll=components]').click(function(){
        scroll('components')
    })
    $('[data-scroll=image]').click(function(){
        scroll('image')
    })
    $('[data-scroll=contact_form]').click(function(){
        scroll('contact_form')
    })
    $('[data-scroll=installation]').click(function(){
        scroll('installation')
    })

})
