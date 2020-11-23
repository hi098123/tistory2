(function(){
	var imgs=document.querySelectorAll('img[srcset*="img1.daumcdn.net"]');
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].srcset=imgs[i].srcset.replace('img1.daumcdn.net','i1.daumcdn.net');
	}
	imgs=[];
	imgs=document.querySelectorAll('img[src*="img1.daumcdn.net"]');
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].src=imgs[i].src.replace('img1.daumcdn.net','i1.daumcdn.net');
	}
	imgs=[];
	imgs=document.querySelectorAll('link[href*="img1.daumcdn.net"]');
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].href=imgs[i].href.replace('img1.daumcdn.net','i1.daumcdn.net');
	}
	imgs=[];
	imgs=document.querySelectorAll('meta[content*="img1.daumcdn.net"]');
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].content=imgs[i].content.replace('img1.daumcdn.net','i1.daumcdn.net');
	}
})();