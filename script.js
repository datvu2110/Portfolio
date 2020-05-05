

$(document).on("click","#proj1" ,showModal1);
$(document).on("click","#proj2" ,showModal2);
$(document).on("click","#close" ,hideModal);

function showModal1(e){
	$('#modal1').addClass('showModal');
}
function showModal2(e){
	$('#modal2').addClass('showModal');
}

function hideModal(e){
	$('.modal').removeClass('showModal');
}


$(document).click(function (e) {
    if ($(e.target).is('.modal')) {
        hideModal();
    }
});