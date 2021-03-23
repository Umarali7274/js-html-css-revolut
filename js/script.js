// dropdown shows
function openThisDrodown(){

    // if other dropdown's open -> collapse
    $('.dropdown').removeClass('js-flex');
    // hovered dropdown shows
    $(this).find('.dropdown').addClass('js-flex')
    

};
// close dropdown by clicking elsewhere
function removeDropdown(){

    $('.dropdown').removeClass('js-flex');
}

function init(){

    // dropdown on hover
    $('#features, #plans, #about, #help').hover(openThisDrodown)
    // elsewhere click event
    $(document).click(removeDropdown)
};

$('document').ready(init);
