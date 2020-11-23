(function(){
	var tester = new Image();
    tester.addEventListener('error', function () {
    	var imgs=document.querySelectorAll('img[srcset*="img1.daumcdn.net"]');
		for (var i = 0; i < imgs.length; i++) {
			if(imgs[i].naturalWidth===0){
				imgs[i].srcset=imgs[i].srcset.replace('img1.daumcdn.net','i1.daumcdn.net');
			}
		}
		imgs=[];
		imgs=document.querySelectorAll('img[src*="img1.daumcdn.net"]');
		for (var i = 0; i < imgs.length; i++) {
			if(imgs[i].naturalWidth===0){
				imgs[i].src=imgs[i].src.replace('img1.daumcdn.net','i1.daumcdn.net');
			}
		}
		imgs=[];
		imgs=document.querySelectorAll('link[href*="img1.daumcdn.net"]');
		for (var i = 0; i < imgs.length; i++) {
			if(imgs[i].naturalWidth===0){
				imgs[i].href=imgs[i].href.replace('img1.daumcdn.net','i1.daumcdn.net');
			}
		}
		imgs=[];
		imgs=document.querySelectorAll('meta[content*="img1.daumcdn.net"]');
		for (var i = 0; i < imgs.length; i++) {
			if(imgs[i].naturalWidth===0){
				imgs[i].content=imgs[i].content.replace('img1.daumcdn.net','i1.daumcdn.net');
			}
		}
    });
    tester.src = 'https://img1.daumcdn.net/thumb/C76x76/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F241F093D5701E73803';
})();