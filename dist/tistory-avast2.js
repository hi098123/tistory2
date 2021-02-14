/*
  제작: hi098123
  공식적으로 해결된 문제입니다. 또 다시 문제 발생하였다고 하여 코드를 다시 넣었습니다.
*/
(function(){
	function ui_init(){
    	var tester = new Image();
	    tester.addEventListener('error', function () {
	    	var imgs=document.querySelectorAll('img[srcset*="img1.daumcdn.net"]');
			for (var i = 0; i < imgs.length; i++) {
				if(imgs[i].naturalWidth===0){
					imgs[i].srcset=imgs[i].srcset.replace('img1.daumcdn.net','img2.daumcdn.net');
				}
			}
			imgs=[];
			imgs=document.querySelectorAll('img[src*="img1.daumcdn.net"]');
			for (var i = 0; i < imgs.length; i++) {
				if(imgs[i].naturalWidth===0){
					imgs[i].src=imgs[i].src.replace('img1.daumcdn.net','img2.daumcdn.net');
				}
			}
			imgs=[];
			imgs=document.querySelectorAll('link[href*="img1.daumcdn.net"]');
			for (var i = 0; i < imgs.length; i++) {
				if(imgs[i].naturalWidth===0){
					imgs[i].href=imgs[i].href.replace('img1.daumcdn.net','img2.daumcdn.net');
				}
			}
			imgs=[];
			imgs=document.querySelectorAll('meta[content*="img1.daumcdn.net"]');
			for (var i = 0; i < imgs.length; i++) {
				if(imgs[i].naturalWidth===0){
					imgs[i].content=imgs[i].content.replace('img1.daumcdn.net','img2.daumcdn.net');
				}
			}
			imgs=[];
			imgs=document.querySelectorAll('[style*="background"]');
			for (var i = 0; i < imgs.length; i++) {
				if(imgs[i].style.background!=""){
					imgs[i].style.background=imgs[i].style.background.replace('img1.daumcdn.net','img2.daumcdn.net');
				}
				if(imgs[i].style.backgroundImage!=""){
					imgs[i].style.backgroundImage=imgs[i].style.backgroundImage.replace('img1.daumcdn.net','img2.daumcdn.net');
				}
			}
			document.body.innerHTML+='<style>.hi098123-notify{position:fixed;top:0px;width:100%;height:0;box-sizing:border-box;color:white;text-align:center;background:rgba(76,175,80);overflow:hidden;box-sizing:border-box;transition:height .2s;z-index:9999999;padding:20px;line-height:1.5}#notifyType:before{display:block}.active{height:auto}.failure:before{white-space:pre-line;content:"\\69\\6d\\67\\31\\2e\\64\\61\\75\\6d\\63\\64\\6e\\2e\\6e\\65\\74\\c740\\20\\b2e4\\c74c\\ce74\\ce74\\c624\\c758\\20\\c774\\bbf8\\c9c0\\c11c\\bc84\\c785\\b2c8\\b2e4\\2e \\A\\A \\41\\76\\61\\73\\74\\bc31\\c2e0\\c744\\20\\c0ac\\c6a9\\d558\\c2dc\\b098\\c694\\3f\\20\\cd5c\\adfc\\20\\c5c5\\b370\\c774\\d2b8\\b85c\\20\\b2e4\\c74c\\28\\64\\61\\75\\6d\\2e\\6e\\65\\74\\29\\c758\\20\\ba54\\c778\\c5d0\\c11c\\b3c4\\20\\c77c\\bd80\\20\\c774\\bbf8\\c9c0\\ac00\\20\\cc28\\b2e8\\b420\\20\\c218\\20\\c788\\c2b5\\b2c8\\b2e4\\2e"}</style><div class="hi098123-notify active"><span id="notifyType" class="failure"></span></div>';

			setTimeout(function(){
				document.querySelector(".hi098123-notify").setAttribute('class',"hi098123-notify");
				document.querySelector("#notifyType").setAttribute('class',"");
				document.querySelector(".hi098123-notify").style.display="none";
			},6000);
	    });
	    tester.src = 'https://img1.daumcdn.net/thumb/C76x76/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F241F093D5701E73803';
	}

	if(document.addEventListener){
        document.addEventListener("DOMContentLoaded", function() {
            document.removeEventListener("DOMContentLoaded", arguments.callee, false);
            ui_init();
        }, false);
    }else if(document.attachEvent){
        document.attachEvent("onreadystatechange", function() {
            if(document.readyState == "complete"){
                document.detachEvent("onreadystatechange", arguments.callee);
                ui_init();
            }
        });
    }
})();
