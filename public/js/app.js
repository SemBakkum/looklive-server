(function () {
    "use strict";
    
    function change(e) {
        var id = e.currentTarget.attributes[2].value;
        document.querySelector('.product-indicator-active').classList.remove('product-indicator-active');
        e.currentTarget.classList.add('product-indicator-active');
        document.querySelector('.product-active').classList.remove('product-active');
        document.querySelector('.product[data-uuid="' + id + '"]').classList.add('product-active');
    }
    
    if ('querySelector' in document && 'addEventListener' in window) {
        
        if (document.querySelector('.product')) {
     
            var product = document.querySelector('.product'),
                indicator = document.querySelector('.product-indicator[data-uuid="' + product.attributes[1].value + '"]'),
                indicators = document.getElementsByClassName('product-indicator'),
                i = 0;

            product.classList.add('product-active');
            indicator.classList.add('product-indicator-active');

            for (i; i < indicators.length; i += 1) {
                indicators[i].addEventListener('click', change, false);
            }
            
        }
        
    }
              
}());