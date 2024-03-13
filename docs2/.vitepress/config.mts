import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Node API for .NET",
  description: "Advanced interoperability between .NET and JavaScript in the same process",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: 'Get Started',
        items: [
          {
            text: 'Scenarios',
            link: '/scenarios',
            items: [
              { text: 'Dynamic .NET from JS', link: '/js-to-dotnet-dynamic' },
              { text: '.NET module for Node.js', link: '/js-to-dotnet-module' },
              { text: '.NET Native AOT for Node.js', link: '/js-to-aot-module' },
              { text: 'Embedding JS in .NET', link: '/dotnet-to-js' },
            ]
          },
          { 'text': 'Requirements', link: '/requirements' },
          { 'text': 'Example projects', link: '/examples' },
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Type definitions', link: '/type-definitions' },
          { text: 'Automatic marshalling', link: '/automatic-marshalling' },
          { text: 'Basic types', link: '/basic-types' },
          { text: 'Null & undefined', link: '/null-undefined' },
          { text: 'Classes & interfaces', link: '/classes-interfaces' },
          { text: 'Structs', link: '/structs' },
          { text: 'Enums', link: '/enums' },
          { text: 'Arrays & collections', link: '/arrays-collections' },
          { text: 'Tuples', link: '/tuples' },
          { text: 'Delegates', link: '/delegates' },
          { text: 'Streams', link: '/streams' },
          { text: 'Other special types', link: '/other-types' },
          { text: 'Async & promises', link: '/async-promises' },
          { text: 'Generics', link: '/generics' },
          { text: 'Extension methods', link: '/extension-methods' },
          { text: 'Overloaded methods', link: '/overloaded-methods' },
          { text: 'Ref & out parameters', link: '/ref-out-params' },
          { text: 'Events', link: '/events' },
          { text: 'Error propagation', link: '/error-propagation' },
          { text: 'Namespaces', link: '/namespaces' },
          { text: 'JS types in .NET', link: '/js-types-in-dotnet' },
          { text: 'JS value scopes', link: '/js-value-scopes' },
          { text: '.NET Native AOT', link: '/dotnet-native-aot' },
          { text: 'Embedding JS in .NET', link: '/embedding-js-in-dotnet' },
          { text: 'How it works', link: '/how-it-works' },
          { text: 'Performance', link: '/performance' },
          { text: 'Limitations', link: '/limitations' },
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Type mappings', link: '/type-mappings' },
          { text: 'JavaScript APIs', link: '/js-apis' },
          { text: '.NET APIs', link: '/dotnet-apis' },
          { text: 'MSBuild props & tasks', link: '/msbuild-props-tasks' },
          { text: 'Releases & packages', link: '/releases-packages' },
        ]
      },
      { text: 'Support', link: '/support' },
      { text: 'Contributing', link: '/contributing' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/microsoft/node-api-dotnet' },
    ],

    search: {
      provider: 'local',
    }
  }
})
