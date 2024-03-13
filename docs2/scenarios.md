# .NET / JS Interop Scenarios

There are four primary scenarios enabled by this project. Choose one of them for getting-started
instructions:

 - [Dynamically invoke .NET APIs from JavaScript](./js-to-dotnet-dynamic)<br/>
   Dynamic invocation is simpler to set up: all you need is the `node-api-dotnet` package and
   the path to a .NET assembly you want to call. It is not quite as fast as a C# addon module
   because marshalling code must be generated at runtime. It is best suited for simpler projects
   with limited interop needs.

 - [Develop a Node.js addon module in C#](./js-to-dotnet-module)<br/>
   A C# Node module exports specific types and methods from the module to JavaScript. It can be
   faster because marshalling code is generated at compile time, and the shape of the APIs
   exposed to JavaScript can be designed or adapted with JS interop in mind. It is best suited
   for more complex projects with advanced or high-performance interop requirements.

 - [Develop a Node.js addon module in C#, compiled with .NET Native AOT](./js-to-aot-module)<br/>
   A variation on the previous scenario, this is best suited for creation of a re-usable Node.js
   native addon that loads quickly and does not depend the .NET runtime.

 - [Embed a JS runtime in a .NET application](./dotnet-to-js)<br/>
   Run Node.js (or another JS runtime) in a .NET application process, with advanced interop
   capabilities. Use third-party `npm` packages and/or invoke custom JavaScript from .NET.
