$(document).ready(function() {
    var l = 6;
    
    var userFeed = new Instafeed({
        get: 'user',
        userId: '2267354727',
        limit: l,
        resolution: 'standard_resolution',
        accessToken: '2267354727.1677ed0.4a5f3391d8fa4cd596995ebb404beea0',
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