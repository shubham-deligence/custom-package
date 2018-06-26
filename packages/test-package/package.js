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