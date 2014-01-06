$(document).ready(function() {
  $('#switcher-default').addClass('selected');

  $('#switcher button').bind('click', function() {
    //var info = this.id;
	//alert(info);
     //info = this.id.split('-');
	 //alert(info);
	var bodyClass = this.id.split('-')[1];
     //alert(bodyClass); 
    $('body').removeClass().addClass(bodyClass);

    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
  });
});
