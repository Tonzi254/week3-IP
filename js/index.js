$(document).ready(function () {

    $("#work1").mouseenter(function () {
        $("#overlay1").show();
    }).mouseleave(function () {
        $("#overlay1").hide();
    });

    $("#work2").mouseenter(function () {
        $("#overlay2").show();
    }).mouseleave(function () {
        $("#overlay2").hide();
    });

    $("#work3").mouseenter(function () {
        $("#overlay3").show();
    }).mouseleave(function () {
        $("#overlay3").hide();
    });

    $("#work4").mouseenter(function () {
        $("#overlay4").show();
    }).mouseleave(function () {
        $("#overlay4").hide();
    });

    $("#work5").mouseenter(function () {
        $("#overlay5").show();
    }).mouseleave(function () {
        $("#overlay5").hide();
    });

    $("#work6").mouseenter(function () {
        $("#overlay6").show();
    }).mouseleave(function () {
        $("#overlay6").hide();
    });

    $("#work7").mouseenter(function () {
        $("#overlay7").show();
    }).mouseleave(function () {
        $("#overlay7").hide();
    });

    $("#work8").mouseenter(function () {
        $("#overlay8").show();
    }).mouseleave(function () {
        $("#overlay8").hide();
    });


    $("#design-image").click(function () {
        $("#design-image").slideDown('1500').hide('1000');
        $("#design").show('1500');
    });
    $("#design").click(function () {
        $("#design").slideUp('1500');
        $("#design-image").slideDown('1500');
    });

    $("#dev-image").click(function () {
        $("#dev-image").slideDown('1500').hide('1000');
        $("#dev").show('1500');
    });
    $("#dev").click(function () {
        $("#dev").slideUp('1500');
        $("#dev-image").slideDown('1500');
    });

    $("#prod-image").click(function () {
        $("#prod-image").slideDown('1500').hide('1000');
        $("#prod").show('1500');
    });
    $("#prod").click(function () {
        $("#prod").slideUp('1500');
        $("#prod-image").slideDown('1500');
    });

    $("form#contactForm").submit(function (event) {
        event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#message").val();
        if (name && email != '') {
            alert("Hello " +name + ". Thank you for contacting us. We have received your message and will get back to you shortly via email to " +email);
        }
        else {
            alert("Please enter your name and email!");
        }

    });

});

