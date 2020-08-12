$(document).ready(function () {

    $('#log-in').click(function (event) {
        event.preventDefault();
        var email_input = $('.email').val()
        var password_input = $('.password').val()
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;


        if ((!pattern.test(email_input)) || (password_input).length === 0 || (email_input).length === 0) {
            $('.form-input').css('border', 'solid 1px #800000')
            $('.error-msg').text('Email or Password is incorrect!')


        } else {
            $.ajax({
                    type: 'POST',
                    url: "https://reqres.in/api/login",
                    data: {
                        email: email_input,
                        password: password_input
                    },
                    dataType: 'json',
                })
                .done(function () {
                    $(location).attr('href', './user_team_member/memberpage.html')
                })
                .fail(function () {
                    $('.form-input').css('border', 'solid 1px #800000')
                    $('.error-msg').text('Invalid login credentials!')

                })

        }


    });

})