options = {
        success: function(files){
                alert("Here's the file link: " + files[0].link)
        },
        linkType: "direct",
        multiselect: true,
        extensions:['.jpg'],
        path: "/smithphotos/images/01.jpg"
};
Dropbox.choose(options);
setInterval(Dropbox.choose, 100000);
