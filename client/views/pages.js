var pages = {
	pages: function(){
		return Pages.find();
	}
}
Template.footer.helpers(pages);
Template.topNav.helpers(pages);