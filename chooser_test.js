options = {
        success: function(files){
        },
        cancel: function(){
        },
        linkType: "direct",
        multiselect: true,
        extensions:['.jpg'],
};
var button = Dropbox.createChooseButton(options);
document.getElementById("dropboxContainer").appendChild(button);
