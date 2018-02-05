$( document ).ready(function() {

    $.getJSON('json/insure.json', function(data) {
      $.each(data, function() {
        if ('content' in document.createElement('template')) {
          // FOR ROW//
          var row = document.querySelector('#js-insurance__row'),
          name = row.content.querySelector('.company__name'),
          covering = row.content.querySelector('.table__covering'),
          type = row.content.querySelector('.js-type'),
          level = row.content.querySelector('.js-level'),          
          drugs = row.content.querySelector('.table__drugs'),
          visits = row.content.querySelector('.table__visits'),
          deductible = row.content.querySelector('.table__deductible'),
          price = row.content.querySelector('.js-price'),
          insure = data["cart"],
          table = document.querySelector(".main__table");
          

           for (var i = 0; i < insure.length; i++) {     
            name.textContent = insure[i].name;
            covering.textContent = insure[i].covering;
            type.textContent = insure[i].type;
            level.textContent = insure[i].level;
            drugs.textContent = insure[i].drugs;
            visits.textContent = insure[i].visits;
            deductible.textContent = insure[i].deductible;
            price.textContent = insure[i].price;
            var clone = document.importNode(row.content, true);
            table.appendChild(clone);     
          }
        
        } else {
      
        }

        var logos = $('.company__logo'),
            levels = $('.table__level--color'),
            rating = $('.company__rating').children('.star');

        for (var i = 0; i < insure.length; i++) {     
          logos[i].setAttribute("src",  insure[i].logo);
          levels[i].setAttribute("data-color", insure[i].level.toLowerCase());

          for (var j = 0; j < 5; j++) {
            if (j < insure[i].rating) {
              var k = 5 * i + j;
              rating[k].setAttribute("data-color", "gold");
            }

          }
        }
      });
    });


    var blocks = $('.table__blocks'),
        rows = $('.table__cart'),
        cartTouch = $('.cart'),
        blocksTouch = $('.block'),
        burger = $('.js-menu'),
        mobileMenu = $('.nav__mobile'),
        closeMenu = $('.close');

    blocks.slideUp(0);
    mobileMenu.slideUp(0);

    burger.on('click', function() {
      mobileMenu.slideToggle(1000);
    });

    closeMenu.on('click', function() {
      mobileMenu.slideToggle(1000);
    });

    cartTouch.on('click', function() {
      if (!cartTouch.hasClass('active')) {
        cartTouch.addClass('active');
        rows.slideToggle(1000);
        blocks.slideToggle(1000);
        blocksTouch.removeClass('active');
      }
    });

    blocksTouch.on('click', function() {
      if (!blocksTouch.hasClass('active')) {        
        blocksTouch.addClass('active');
        rows.slideToggle(1000);
        blocks.slideToggle(1000);        
        cartTouch.removeClass('active');
      }
    });

    $(window).resize(function() {
      if ($(window).width() <= '1200'){
        if (!blocksTouch.hasClass('active')) {        
          blocksTouch.addClass('active');
          rows.slideToggle(1000);
          blocks.slideToggle(1000);        
          cartTouch.removeClass('active');
        }
      }

    });
});