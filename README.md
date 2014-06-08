myBoilerPlate
=============

A Boiler Plate meteor app with top bar navigation, basic footer, iron-router, errors, and bootstrap-3

This was made using [Meteor](https://www.meteor.com/) version 0.8.1.3



Usage
=====
```
git clone https://github.com/rainbough/myBoilerPlate.git yourNewAppDir
```

You will need meteor and [meteorite](https://github.com/oortcloud/meteorite/) installed:

[Meteor](https://www.meteor.com/):
```
curl https://install.meteor.com | /bin/sh
```

[Meteorite](https://github.com/oortcloud/meteorite/) (via npm):
```
npm install -g meteorite
```

```
cd yourNewAppDir
mrt
```

You can use the command <code>mrt</code> or <code>meteor</code> to run the app on port 3000.


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