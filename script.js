$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 60){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
        
    });

});

/*Download button script*/

document.getElementById('download-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link

        // Get the image URL from the link's href attribute
        var imageURL = this.getAttribute('href');

        // Create a temporary anchor element
        var downloadLink = document.createElement('a');
        downloadLink.href = imageURL;
        downloadLink.download = 'downloaded_image.jpg'; // Set the desired download filename

        // Trigger a click event on the temporary link to initiate the download
        downloadLink.click();
    });