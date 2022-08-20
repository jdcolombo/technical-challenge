
document.addEventListener('DOMContentLoaded', () => {

  setTimeout(function(){
    
    const container = document.getElementById('zoovu-assistant');
    var buttons = document.querySelectorAll('.page-selector');
    var step = buttons[0].getAttribute('data-step');
    if(document.querySelector('.section-type--questionnaire')) {
      container.classList.add("step-" + (new Number(step) + 1))
    } else {
      container.className = "results-page";
      newButton()
    }

    const observer = new MutationObserver(function(mutations) {
      if (document.querySelector('.section-type--questionnaire')) {
        buttons = document.querySelectorAll('.page-selector');
        step = buttons[0].getAttribute('data-step');
        container.className = "";
        container.classList.add("step-" + (new Number(step) + 1))
        observer.disconnect();
      }
      else {
        container.className = "results-page";
        if(!document.querySelector('.visit-store-button')) {
          newButton()
          observer.disconnect();
        }
      }
      observer.observe(container, { subtree: true, childList: true });
    });
    
    observer.observe(container, { subtree: true, childList: true });

    function newButton() {
      var card = document.querySelector('.top-product .product-footer'); 
      var link = document.createElement('a');
      link.setAttribute('href', 'https://zoovudemos.com/Dyson/index.html');
      link.setAttribute('class', 'visit-store-button');
      link.setAttribute('target', '_blank');
      link.innerHTML = 'Visit Demo Store'
      card.appendChild(link);
    }
    
  }, 4000);
});

