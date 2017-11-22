


//Install Node js and validate that typescript extension is installed in Visualstudio. 
//Go to https://github.com/angular/quickstart 
//Download the files and unzip into a folder 
//Add angular files (package.json and tslint.json) in root of mvc project
//Add src folder to root of mvc project.
//Restart visual studio to see the changes
//Right click package.json and click restore packages to build. (\node_modules) folder will get build.no need to include this hidden folder into project


//Configuring angular
//open \Views\Shared\layout.cshtml and add below tag under head tag.
//<head >
//    <base href="/src/">
//open a existing page,which we want to convert to angular
//Delete all the html and razor syntax and delete all the js code which part of <script> tag
//Add a sample div tag like below for initail html setup
//        <div class="row"> <div class="col-xs-12"> <my-app> Loading product application... </my-app>  </div>   </div>
// Add below scripts into same html page
//        @section scripts {
//                    <!--Polyfill(s) for older browsers -->
//                        <script src="/node_modules/core-js/client/shim.min.js"> </script>
//                         <script src="/node_modules/zone.js/dist/zone.js"> </script>
//                         <script src="/node_modules/systemjs/dist/system.src.js"> </script>
//                         <script src="/src/systemjs.config.js"></script>
//                         <script>
//                             System.import('/src/main.js')
//                                .catch(function (err) {console.error(err); });  </script> }
//  Open \src\systemjs.config.js and update npm paths as below:
//         paths: {
//                  'npm:': '/node_modules/'  },
//   Go to respective controller class and delete every existing code except a blank get method. as we will be using api calls
    


