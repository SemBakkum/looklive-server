<<<<<<< HEAD
!function(){"use strict";function t(t){var e=t.currentTarget.attributes[2].value;document.querySelector(".product-indicator-active").classList.remove("product-indicator-active"),t.currentTarget.classList.add("product-indicator-active"),document.querySelector(".product-active").classList.remove("product-active"),document.querySelector('.product[data-uuid="'+e+'"]').classList.add("product-active")}if("querySelector"in document&&"addEventListener"in window&&document.querySelector(".product")){var e=document.querySelector(".product"),c=document.querySelector('.product-indicator[data-uuid="'+e.attributes[1].value+'"]'),r=document.getElementsByClassName("product-indicator"),d=0;for(e.classList.add("product-active"),c.classList.add("product-indicator-active"),d;d<r.length;d+=1)r[d].addEventListener("click",t,!1)}}();
=======
(function () {
    'use strict';

    /**
     * Invoked when the page is ready.
     *
     * @param  {Function} fn
     * @return {void}
     */
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    /**
     * Set the classes on the appearence page.
     *
     * @return {void}
     */
    function appearance() {
        var firstProduct = document.querySelector('.product');
        var firstIndicator = document.querySelector(
            '.product-indicator[data-uuid="' + firstProduct.getAttribute('data-uuid') + '"]'
        );
        var indicators = document.querySelectorAll('.product-indicator');

        firstProduct.classList.add('product-active');
        firstIndicator.classList.add('product-indicator-active');

        Array.prototype.forEach.call(indicators, function (el) {
            el.addEventListener('click', function (event) {
                var id = event.currentTarget.getAttribute('data-uuid');

                document
                    .querySelector('.product-active')
                    .classList.remove('product-active');

                document
                    .querySelector('.product-indicator-active')
                    .classList.remove('product-indicator-active');

                document
                    .querySelector('.product[data-uuid="' + id + '"]')
                    .classList.add('product-active');

                event.currentTarget.classList.add('product-indicator-active');
            });
        });
    }

    ready(function () {
        if (/appearance/.test(window.location.href)) {
            appearance();
        }
    });
}());

>>>>>>> donnywals/master
