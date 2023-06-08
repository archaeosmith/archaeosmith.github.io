options = {
        success: function(files){
                alert("Here's the file link: " + files[0].link)
        },
        linkType: "direct",
        multiselect: true,
        extensions:['.jpg'],
};
Dropbox.choose(options);
var w = window.open(window.location.href);
setInterval(function(){w.window.location.reload()},10000)
