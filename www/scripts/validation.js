$(document).ready(function () {
    $("#feedbackForm").on("submit", function(){
        var formValid = true;

        if( $("#name").prop("validity").valid){
            $("#nameError").addClass("hidden");
        }   else{
            $("#nameError").removeClass("hidden");
            formValid = false;
        };

        if( $("#email").prop("validity").valid){
            $("#emailError").addClass("hidden");
        }   else{
            $("#emailError").removeClass("hidden");
            formValid = false;
        };

        if( $("#like").prop("validity").valid){
            $("#likeError").addClass("hidden");
        }   else{
            $("#likeError").removeClass("hidden");
            formValid = false;
        };

        if( $("#dislike").prop("validity").valid){
            $("#dislikeError").addClass("hidden");
        }   else{
            $("#dislikeError").removeClass("hidden");
            formValid = false;
        };

        if( $("#suggestions").prop("validity").valid){
            $("#suggestionsError").addClass("hidden");
        }   else{
            $("#suggestionsError").removeClass("hidden");
            formValid = false;
        };

        if ( $("#friday").is(':checked') || $("#saturday").is(':checked') || ($("#sunday").is(':checked'))){
          $("#checkError").addClass("hidden");
        } else {
          $("#checkError").removeClass("hidden");
          formValid = false;
        };

        return formValid;
    });
});
