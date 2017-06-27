function runScript(){
    var video, output;
    output = $("#output");
    video = $("#video").get(0);
    $("#capture").on('click', captureImage);
    function captureImage(){
        var scale = 0.2;
        var canvas = document.createElement("canvas");
        canvas.width = video.videoWidth * scale;
        canvas.height = video.videoHeight * scale;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        var img = document.createElement("img");
        img.src = canvas.toDataURL();
        output.prepend(img);
    };
}
runScript();