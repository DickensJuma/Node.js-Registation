
$(function(){

    $("#register").on('click', function(event){
        event.preventDefault();
        var fullname   = $("#fullname").val();
        var email      = $("#email").val();
        var password   = $("#password").val();
        var cpassword  = $("#cpassword").val();
        var ID         = $("#ID").val();
        var dob        = $("#dob").val();
        var doa        = $("#doa").val();
        var status     = $("#status").val();
        var loe        = $("#loe").val();
        var institution= $("#institution").val();
        var phone      = $("#phone").val();
        var country    = $("#country").val();
        var gender     = $('input[name="gender"]:checked').val(); 
        var terms      = $('input[name="terms"]:checked').val();

        if(!fullname || !email || !password || !cpassword || !ID || !dob || !status|| phone || !country || !gender){ 
            $("#msgDiv").show().html("All fields are required.");
        } else if(cpassword != password){
            $("#msgDiv").show().html("Passowrds should match.");
        } else if (!terms){
            $("#msgDiv").show().html("Please agree to terms and conditions.");
        }
        else{ 
            $.ajax({
                url: "/register",
                method: "POST",
                data: { full_name: fullname, email: email, password: password, cpassword: cpassword,ID: ID, dob: dob, doa: doa,loe: loe, npinstitution: institution, status: status,phone: phone, country: country, gender: gender,  terms: terms }
            }).done(function( data ) {

                if ( data ) {
                    if(data.status == 'error'){

                        var errors = '<ul>';
                        $.each( data.message, function( key, value ) {
                            errors = errors +'<li>'+value.msg+'</li>';
                        });

                        errors = errors+ '</ul>';
                        $("#msgDiv").html(errors).show();
                    }else{
                        $("#msgDiv").removeClass('alert-danger').addClass('alert-success').html(data.message).show(); 
                    }
                }
            });
        }
    });
});