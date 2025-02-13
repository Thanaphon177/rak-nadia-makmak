$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_video = $("#video-btn");
    var video_iframe = $("#video");

    // When the 'open' button is clicked
    btn_open.click(function() {
        open();
    });

    // When the 'reset' button is clicked
    btn_reset.click(function() {
        close();
    });

    // When the 'Watch Video' button is clicked
    btn_video.click(function() {
        // Show the iframe (video)
        video_iframe.show();
        setTimeout(function() {
            window.location.href = "https://youtube.com/shorts/aw72DgnbgK0?si=vZBlS-4LYAcagCTI"; // Replace with your video URL
        }, 500); // Delay 500ms before changing to video
    });

    // Function to open the envelope
    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    // Function to close the envelope
    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }
})
