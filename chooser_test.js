options = {
        success: function(files){
        },
        cancel: function(){
        },
        linkType: "direct",
        multiselect: true,
        extensions:['.jpg'],
};
Dropbox.choose(options);
