$(function(){
    const toDoForm = $('.js_toDoForm')
    const inputSpan = $('.js-inputSpan');
    const undi = $('#toDoInput')
    toDoForm.click(function(){
        inputSpan.css('transform' , 'translate3d(0,-12px,0) scale(.75)')
    })
    undi.blur(function(){
        if(undi.val().length === 0){
            inputSpan.css('transform' , 'scaleX(1)'),
            inputSpan.css('transition' , 'all .3s ease')
            inputSpan.css('color' , '#34495e')
        }
    })
})