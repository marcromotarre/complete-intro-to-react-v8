export default [
  {
    path: "project-setup",
    name: "Project Setup",
  },
  {
    path: "react",
    name: "React",
    children: [
      {
        path: "react/my-components",
        name: "My Components",
        children: [
          { path: "react/my-components/modal", name: "Modal" },
          { path: "react/my-components/code", name: "Code" },
          { path: "react/my-components/icon", name: "Icon" },
        ],
      },
      {
        path: "react/hooks",
        name: "Hooks",
        children: [
          { path: "react/hooks/useState", name: "useState" },
          { path: "react/hooks/useEffect", name: "useEffect" },
          { path: "react/hooks/useLayoutEffect", name: "useLayoutEffect" },
          { path: "react/hooks/useMemo", name: "useMemo" },
        ],
      },
      {
        path: "react/patterns",
        name: "Patterns",
        children: [
          {
            path: "react/patterns/hoc-pattern",
            name: "Provider HOC Pattern",
          },
          {
            path: "react/patterns/provider-pattern",
            name: "Provider Pattern",
          },
          {
            path: "react/patterns/compound-component-pattern",
            name: "Compound Component Pattern",
          },
          { path: "react/patterns/hooks-pattern", name: "Hooks Pattern" },
          {
            path: "react/patterns/conditional-rendering-design-pattern",
            name: "Conditional Rendering Design Pattern",
          },
        ],
      },
      { path: "react/interesting-questions", name: "Interesting Questions" },
    ],
  },
  {
    path: "javascript",
    name: "Javascript",
    children: [
      {
        path: "javascript/patterns",
        name: "Patterns",
        children: [
          {
            path: "javascript/patterns/module-pattern",
            name: "Module Pattern",
          },
          {
            path: "javascript/patterns/singleton-pattern",
            name: "Singleton Pattern",
          },
          {
            path: "javascript/patterns/proxy-pattern",
            name: "Proxy Pattern",
          },
          {
            path: "javascript/patterns/observer-pattern",
            name: "Observer Pattern",
          },
          {
            path: "javascript/patterns/factory-pattern",
            name: "Factory Pattern",
          },
          {
            path: "javascript/patterns/prototype-pattern",
            name: "Prototype Pattern",
          },
        ],
      },
      {
        path: "javascript/interesting-questions",
        name: "Interesting Questions",
      },
    ],
  },
];
