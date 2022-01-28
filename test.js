$(document).ready(function(){
	girlsload = new SkeletonLoader("assets/character/", data_girl);
	fursload = new ImageLoader("assets/furniture/", data_furniture);
  dormview = new DormView(1920, 1080);
	$('.mainview').append(dormview.renderer.view);
	dormview.start();
	preview = new PreView('.mainview>.sideleft');
	editview = new EditView('.mainview>.sideright');
	preview.init();
	editview.init();
});
var girlsload, fursload;
var dormview;
var preview, editview;
