jQuery( document ).ready(function() {
     jQuery('.toggle').click(function(){
         jQuery('body').toggleClass('day');
         jQuery('body').toggleClass('night');
     });
});
