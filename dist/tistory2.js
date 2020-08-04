(function() {
    function ui_init(){
    	if(window.location.hostname!=TistoryBlog.tistoryUrl.split('/')[2]){
    		var comm=document.querySelector('form[action*="/comment/add/"]');
			var parent=comm.parentNode;
			var notice=document.createElement('div');
			notice.id='hi098123-tistory2';
			notice.innerHTML='<span>티스토리 로그인이 해제되었나요?</span><span><a href="https://www.tistory.com/auth/login/?redirectUrl='+encodeURIComponent(TistoryBlog.tistoryUrl+window.location.pathname+'#'+parent.id)+'" rel="noopener noreferrer">로그인</a>하여 댓글 남기러가기</span><a href="https://hi098123-skin.tistory.com/22" target="_blank" rel="noopener" style="color: #fff;position: absolute;right: 0;background-color: #aaa;width: 15px;font-size: 12px;top: 0;margin: 0;border-radius: 5px;" title="적용방법 : 제작 hi098123">i</a><style>#hi098123-tistory2{text-align:center;border:2px solid #ff9800;background:#fff3e0;padding:10px 0;color: #333;position: relative}#hi098123-tistory2>span{margin: auto 3px;display:inline-block}</style>';
			parent.insertBefore(notice,comm);
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
