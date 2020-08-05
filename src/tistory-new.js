(function() {
    function ui_init(){
    	var imgs=document.querySelectorAll('img[src*="blogs/image/category/new_ico_1.gif"]');
        var s=document.querySelectorAll('script');
        var q=s[s.length-1].src.split('?')[1] || 'c=5';
        var color=q.split('c=')[1].split('&')[0];
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].src=imgs[i].src.split('new_ico_1.gif').join('new_ico_'+color+'.gif');
        }
    }
	if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", function() {
            document.removeEventListener("DOMContentLoaded", arguments.callee, false);
            ui_init();
        }, false);
    } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function() {
            if (document.readyState == "complete") {
                document.detachEvent("onreadystatechange", arguments.callee);
                ui_init();
            }
        });
    }
})();