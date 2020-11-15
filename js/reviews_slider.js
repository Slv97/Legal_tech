(function(){

    const carousel = function(params) {
        
        if (!params.carousel || 
            !params.buttons.next ||
            !params.buttons.prev) return;
        
        let carousel = document.querySelector('#' + params.carousel);
        
        if (!carousel) return;

        let buttonNext = carousel.querySelector('#' + params.buttons.next),
            buttonPrev = carousel.querySelector('#' + params.buttons.prev);
        
        if (!buttonNext || !buttonPrev) return;
        
        let list = carousel.querySelectorAll('ul li'),
            firstItem = list[0];
        
        if (!firstItem) return;

        const next = function() {
            let width = firstItem.clientWidth,
                marginLeft = Math.abs(parseInt(firstItem.style.marginLeft)) || 0;

            let mLMax = Math.abs(carousel.clientWidth - (width * list.length));

            if ((marginLeft + width) < mLMax) 
                firstItem.style.marginLeft = (-(marginLeft + width)) + 'px';
        };

        const prev = function() {
            let width = firstItem.clientWidth,
                marginLeft = Math.abs(parseInt(firstItem.style.marginLeft)) || 0;
            
            if (marginLeft != 0) firstItem.style.marginLeft = (-(marginLeft - width)) + 'px';
        };

        buttonNext.addEventListener('click', next);
        buttonPrev.addEventListener('click', prev);

    };

    window.addEventListener('load', function() {

        new carousel({
            carousel: 'carousel1',
            buttons: {
                next: 'carousel1Next',
                prev: 'carousel1Prev'
            }
        });

    });

}());