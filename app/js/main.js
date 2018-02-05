$( document ).ready(function() {

    $.getJSON('json/insure.json', function(data) {
      $.each(data, function() {
        if ('content' in document.createElement('template')) {
          // Instantiate the table with the existing HTML tbody
          // and the row with the template
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
});