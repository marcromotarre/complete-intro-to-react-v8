import Header from "../components/Header";
import Title from "../components/common/Title";
import Code from "../components/common/code/Code";
import ReactIcon from "../components/common/icons/ReactIcon";

const ReactHooksPage = () => {
  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-1 gap-y-4 p-8">
        <Title icon={<ReactIcon size={30} />} title="React Hooks" />
        <p className="font-light">
          React Hooks are a feature introduced in React 16.8 that allow
          developers to use state and other React features in functional
          components without the need for writing a class. Hooks are functions
          that enable you to add state and other React features to functional
          components. Traditionally, in React, state and lifecycle methods were
          managed in class components. Hooks provide a way to use these features
          in functional components, making them more powerful and easier to read
          and maintain. Hooks are built-in functions provided by React that you
          can use to add and manage state, perform side effects, and access the
          React lifecycle methods. There are several built-in hooks available in
          React, including:
        </p>
        <p>useState</p>
        <p className="font-light">
          This hook allows you to add and manage state in a functional
          component. It returns a state value and a function to update that
          state. When the value is updated component rerenders.
        </p>
        <Code>
          <div>{`
          const [count, setCount] = useState(0);
          setCount(4)`}</div>
        </Code>
        <Code>
          <>{`
            import React, { useState } from 'react';

            function Counter() {
              // Declare a state variable called "count" and its initial value as 0
              const [count, setCount] = useState(0);

              // Event handler for incrementing the count
              const increment = () => {
                setCount(count + 1);
              };

              // Event handler for decrementing the count
              const decrement = () => {
                setCount(count - 1);
              };

              return (
                <div>
                  <h2>Count: {count}</h2>
                  <button onClick={increment}>Increment</button>
                  <button onClick={decrement}>Decrement</button>
                </div>
              );
            }

            export default Counter;
          `}</>
        </Code>

        <p>useEffect</p>
        <p className="font-light">
          This hook is used to perform side effects, such as fetching data from
          an API or subscribing to events. It replaces lifecycle methods like
          componentDidMount, componentDidUpdate, and componentWillUnmount.
        </p>
        <p className="font-light">
          Example of componentDidMount in FunctionalComponent
        </p>
        <Code>
          <>{`
          useEffect(() => {
          }, []);`}</>
        </Code>
        <p className="font-light">
          Example of componentWillUnmount in FunctionalComponent
        </p>
        <Code>
          <>{`
          useEffect(() => {
            return () => {
              // write here the code
            };
          }, []);;`}</>
        </Code>
      </div>
    </div>
  );
};

export default ReactHooksPage;
