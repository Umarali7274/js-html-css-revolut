// selected dropdown shows - other open dropdown hide
function openDrodown(){

    $('.dropdown').removeClass('js-flex');
    $(this).find('.dropdown').addClass('js-flex')
    

};
// close dropdown by clicking elsewhere
function removeDropdown(){

    $('.dropdown').removeClass('js-flex');
}

function init(){

    // dropdown on hover
    $('#features, #plans, #about, #help').hover(openDrodown)
    // elsewhere click event
    $(document).click(removeDropdown)
};

$('document').ready(init);
