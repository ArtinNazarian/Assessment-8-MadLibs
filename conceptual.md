### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a front-end JavaScript library for buidling user interfaces

- What is Babel?

It is a JS compiler. Babel can translate markup code into JS

- What is JSX? JavaScript sytnax extension.

JSX enables users to write HTML in React

- How is a Component created in React?

Components come in two forms, Class Components and Function Components. Function components are created by declaring a function that has the same name as the JS file. Then, the file is exported.

- What are some difference between state and props?

Props are arguments passed into Reach components. Props are immutable. State is similar to props. However, state is created inside a component. Unlike props, state is mutable.

- What does "downward data flow" refer to in React?

Parent components pass data down to their child components via props.

- What is a controlled component?

Components that have their state and behavior controlled by the parent component. These components rely on props passed down from a parent component.

- What is an uncontrolled component?

Uncontrolled component manage their own state.

- What is the purpose of the `key` prop when rendering a list of components?

React uses key to efficiently manage and update elements within a list.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

Using an array index could cause problems if elements are added or removed becuase the indices of remaining elements can change leading to incorrect updates.

- Describe useEffect. What use cases is it used for in React components?

useEffect hook allows you to perform side effects in your components. Some examples are: fetching data, directly updatind the DOM and setting timers.

- What does useRef do? Does a change to a ref value cause a rerender of a component?

useRef allows you to persist values between renders.

It can be used to access DOM elements directly. useRef lets you reference a value that is not needed for rendering. Changing the ref value does not cause the compoenet to rerender.

- When would you use a ref? When wouldn't you use one?

Use ref to store value that does not trigger a re-render or to store value that persists for the lifetime of the component Don't use ref if the component needs to re-render or value need to change (value doesn't need to persist)

- What is a custom hook in React? When would you want to write one?

Custom hooks are reusable functions. When there is a component logic that is used by multitple compnonets, you can create a custom hook
