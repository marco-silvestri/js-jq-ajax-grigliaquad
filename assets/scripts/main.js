$(document).ready(function () {
    var box = $('.column');
    var myApi = 'https://flynn.boolean.careers/exercises/api/random/int';
    
    box.click(function () { 
        var self = $(this);
        $.ajax({
            url: myApi,
            type: "GET",
            success: function (data) {
                if (!self.hasClass('clicked')){
                    self.text(data.response);
                    self.addClass('clicked');

                    if (data.response <= 5){
                        self.addClass('yellow');    
                    } else if (data.response > 5){
                        self.addClass('green');
                    }
                }
            },
            error: function(){
                alert('Can\'t connect to the API!');
            }
        });
    });
    

}); //END of DOCUMENT