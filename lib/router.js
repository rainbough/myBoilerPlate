// create pages collection
Pages = new Meteor.Collection('pages');

// publish pages collection
if(Meteor.isServer){
	Meteor.publish('pages', function() { 
		return Pages.find();
	});
}
var page1 = {
	num: 1,
	tempName: "page1",
	name: "Page 1"
};

var page2 = {
	num: 2,
	tempName: "page2",
	name: "Page 2"
}

var page3 = {
	num: 3,
	tempName: "page3",
	name: "Page 3"
};

var page4 = {
	num: 4,
	tempName: "page4",
	name: "Page 4"
}

var page5 = {
	num: 5,
	tempName: "page5",
	name: "Page 5"
};

var pages = [page1, page2, page3, page4, page5];
if(Meteor.isServer){
	Meteor.startup(function(){
		for(i=0; i<pages.length; i++) {
			if(pages[i]){
				var page = pages[i];
				Pages.upsert({num: page.num}, page);
			}
		};
	});
}
Router.configure({ 
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { 
		return Meteor.subscribe('pages'); 
	}
});

Router.map(function() { 
	this.route('home', {
		path: '/'
	});
	for(i=0; i<pages.length; i++){
		if(pages[i]){
			var page = pages[i];
			this.route(page.tempName,{
				path: "/" + page.name,
				data: page
			});
		}
	}
});
