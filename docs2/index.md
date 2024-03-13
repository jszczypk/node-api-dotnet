---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Node API for .NET
  text: .NET + JS Interop
  tagline: Advanced interoperability between .NET and JavaScript in the same process
  actions:
    - theme: brand
      text: Get Started
      link: /scenarios
    - theme: alt
      text: Features
      link: /type-definitions
    - theme: alt
      text: Reference
      link: /type-mappings

features:
  - title: Call .NET from JS
    link: js-to-dotnet
    icon: 🔃
    details: Load .NET assemblies from JavaScript and use nearly any APIs, with automatic marshalling and extensive runtime feature support.
  - title: Call JS from .NET
    link: /dotnet-to-js
    icon: 🔃
    details: Run Node.js (or another JS runtime) in a .NET application process, with advanced interop capabilities.
  - title: Type definitions
    link: /type-definitions
    icon: 📜
    details: Automatically generate type TypeScript type definitions for .NET assemblies.
  - title: .NET Native AOT support
    link: /native-aot
    icon: 🤖
    details: Optionally compile a C# library to a fully native Node.js addon that does not depend on the .NET runtime.
  - title: High performance
    link: /performance
    icon: 🚀
    details: Build-time source-generation or runtime code-generation optimizes interop performance.
  - title: Error propagation
    link: /errors
    icon: 💣
    details: .NET exceptions convert to/from JS errors, with combined stack traces.
---
