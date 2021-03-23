// dropdown shows
function openThisDrodown(){


    var active = $(this);

    // if other dropdown's open -> collapse
    $('.dropdown').removeClass('js-flex');
    
    // hovered dropdown shows
    active.find('.dropdown').addClass('js-flex');

    // disable click event on dropdown link
    active.click(function(e){

        e.stopPropagation()
    });
};
// close dropdown by clicking elsewhere
function removeDropdown(){

    $('.dropdown').removeClass('js-flex');
}
function init(){

    // dropdown on hover
    $('#features, #plans, #about, #help').hover(openThisDrodown);
    // elsewhere click event
    $(document).click(removeDropdown);
};

$('document').ready(init);
