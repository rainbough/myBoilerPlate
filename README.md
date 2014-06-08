myBoilerPlate
=============

A Boiler Plate meteor app with top bar navigation, basic footer, iron-router, errors, and bootstrap-3


Top Bar Nav
===========

Go to lib/router.js

Replace the "name" attribute with the desired page names. These will add to your top bar and create a basic page in client/includes/pages.html

```
var page1 = {
	num: 1,
	tempName: "page1",
	name: "services"
};
```

I used generic page names rather than inserting a handlebars template, so that each page could be customized.
