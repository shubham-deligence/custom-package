# custom-package
A simple custom package
How to make meteor package

Make a “packages” folder inside the main app folder.
Make a folder inside the packages and name it to your package name let “test-package”
Make a “lib” folder inside “test-package” and a “package.js” file.
                    


	In package.js file their are mainly 4 parts.
Package.describe
Npm. depends
Api.use
api.addFiles






1. Package.describe
	It will describe the package , its name , summary , git path.
	Example:

Package.describe({
  	name: "shubham:test-package",
  	summary: "A tool for for employee list.",
  	version: "1.0.0",
  	git: "https://github.com/themeteorchef/grindage",
  });


2. Npm.depends 
	It will install all the npm dependencies 
	Example. 

  Npm.depends({
  	"meteor-node-stubs": "0.2.3",
  	"react": "15.2.0",
  	"react-addons-create-fragment": "15.6.2",
  	"react-addons-css-transition-group": "15.6.2",
  	"react-addons-linked-state-mixin": "15.6.2",
  	"react-addons-perf": "15.0.1",
  	"react-addons-pure-render-mixin": "15.1.0",
 	 "react-addons-test-utils": "15.0.1",
  	"react-addons-transition-group": "15.1.0",
  	"react-addons-update": "15.0.1",
 	 "react-bootstrap": "0.29.5",
  	"react-dom": "15.1.0",
  	"react-mixin": "3.0.4",
  	"react-mounter": "1.2.0",
  	"react-paginate": "2.0.1"
  });

Now make Package.onUse(function(api) function



3. api.use
It will tell which external third party we will add when this package will run.
Example.

  Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use('kadira:flow-router@2.12.1');
  api.use('kadira:react-layout@1.5.3');
  api.use(["react"]);
  api.use(["alexwine:bootstrap-4"]);
  api.use('mongo');
  api.use('themeteorchef:bert@2.1.2');
  api.use(["ultimatejs:tracker-react"]);

4. api.addFiles
	It will tell which files we want to add in client side or in server side
Example.

api.addFiles([
    "lib/server/main.js",
    "lib/server/methods.js"
  ], ['server']);

  // Loading files on the client only.
  api.addFiles([
    "lib/module/content/employee_list.js",
    "lib/client/main.js",
    "lib/route/route.js",
    "lib/collections/collection.js"
  ], ['client']);



Complete code of package.js will look like.

Package.describe({
  name: "shubham:test-package",
  summary: "A tool for checking whether Stoney thinks our food group is legit.",
  version: "1.0.0",
  git: "https://github.com/themeteorchef/grindage",
  documentation: "README.md"
});
Npm.depends({
  "meteor-node-stubs": "0.2.3",
  "react": "15.2.0",
  "react-addons-create-fragment": "15.6.2",
  "react-addons-css-transition-group": "15.6.2",
  "react-addons-linked-state-mixin": "15.6.2",
  "react-addons-perf": "15.0.1",
  "react-addons-pure-render-mixin": "15.1.0",
  "react-addons-test-utils": "15.0.1",
  "react-addons-transition-group": "15.1.0",
  "react-addons-update": "15.0.1",
  "react-bootstrap": "0.29.5",
  "react-dom": "15.1.0",
  "react-mixin": "3.0.4",
  "react-mounter": "1.2.0",
  "react-paginate": "2.0.1"
});

 Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use('kadira:flow-router@2.12.1');
  api.use('kadira:react-layout@1.5.3');
  api.use(["react"]);
  api.use(["alexwine:bootstrap-4"]);
  api.use('mongo');
  api.use('themeteorchef:bert@2.1.2');
  api.use(["ultimatejs:tracker-react"]);
 
  api.addFiles([
    "lib/server/main.js",
    "lib/server/methods.js"
  ], ['server']);

  // Loading files on the client only.
  api.addFiles([
    "lib/module/content/employee_list.js",
    "lib/client/main.js",
    "lib/route/route.js",
    "lib/collections/collection.js"
  ], ['client']);

  api.export("Shubham", 'client');
});

Inside the lib directory
	


1.client -> main.js
2. Collection -> collection.js
3.module - > all files which contain code
4 route -> route.js
5.server - > methods.js
	         -> main.js


