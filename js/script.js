$("#buy_1").click(function(){
    let name = $('#name_1').val();
    let phone = $('#phone_1').val();
    let adress = $('#adress_1').val();
    if (name == ''){
        $('.message_modal').html('Вы не указали имя');
        $('.message_modal').css("display", "block");
    } else if (phone == ''){
        $('.message_modal').html('Вы не указали телефон');
        $('.message_modal').css("display", "block");
    } else if (adress == ''){
        $('.message_modal').html('Вы не указали адрес, с городом');
        $('.message_modal').css("display", "block");
    }
    let bath_check = $('#bath_check').is(":checked");
    let bath = $('#bath').val();
    $.ajax({
        url: '/mail.php',
        method: 'post',
        dataType: 'json',
        data: {
            name: name,
            phone: phone,
            adress: adress,
            name: name,
            bath_check: bath_check,
            bath: bath,
            service: "реставрация ванны"
        },
        success: function(data){
            if(data == "succes"){
                $(".content_modal").html("<p style='color: green; text-align: center'>Спасибо за вашу заявку, в ближашее время мы с вами свяжемся!</p>");
            } else{
                $(".content_modal").html("<p style='color: red; text-align: center'>Возникла ошибка оформления заявки, попробуйте с нами связаться по телефону</p>")
            }
        }
    });
});

$(window).click(function(){ 
    $('#catalog_1').fadeOut(500);
    $('#catalog_2').fadeOut(500);});
$('#catalog_1-click').click(function(event){ 
    event.stopPropagation();
    $('#catalog_1').fadeIn(500);});
$('.catalog_2-click').click(function(event){ 
    event.stopPropagation();
    let serv = $(this).attr("data-info");
    $('#catalog_2 h4').html(serv);
    $('#catalog_2').fadeIn(500);});
$('.catalog_box').click(function(event){ 
    event.stopPropagation();});
$(".close").click(function(){
    $('#catalog_1').fadeOut(500);
    $('#catalog_2').fadeOut(500);
});