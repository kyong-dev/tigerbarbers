$(document).ready(function() {
    var l = 6;
    
    var userFeed = new Instafeed({
        get: 'user',
        userId: 'userId here',
        limit: l,
        resolution: 'standard_resolution',
        accessToken: 'accessToken here',
        sortBy: 'most-recent',
        template: '<div style="background-image: url({{image}});" class="insta_photo"></div>',
        filter: function(image) {
            return image.tags.indexOf('gallery') >= 0;
        }
    });

    userFeed.run();



});
// id : https://codeofaninja.com/tools/find-instagram-user-id/
// token generate : http://instagram.pixelunion.net/