import React from "react";

const QA = () => {
  return (
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            1. Props vs state?
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Ans: State : States refers to an object that represents the current
            state of a component. It allows a component to keep track of its
            data and respond to user interaction or other events. <br />
            Props : Props are read-only components. It is an object which stores
            the value of attributes of a tag and works similarly to the HTML
            attributes. It allows passing data from one component to other
            components.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            2. How does useState work?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Ans: useState is a built-in hook in React that allows functional
            components to manage state. When we call the useState hook, it takes
            an initial value and returns an array. The array has two elements. A
            state variable and a function, that can update the state variable.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            3. What is the purpose of useEffect other than fetching data?
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Ans: 1. Animations and transitions : useEffect can be used to
            trigger animations or transitions based on the state or props of
            your component. <br /> 2. Setting up and cleaning up event listeners
            : useEffect is used to add and remove event listeners. <br /> 3.
            Updating the document title : We can use useEffect to update the
            title of the document based on the state or props of your component.
            . <br /> 4. Validating input field : Validating an input while it's
            receiving characters is another great application for useEffect.{" "}
            <br />
            5. Props Change : we can trigger a state update due to an updated
            fetch() call.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            4. How Does React work?
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Ans: React is a very popular JavaScript library. That allows
            developers to create dynamic user interfaces. React use virtual DOM
            to manage updates to the UI efficiently, without rerendering the
            entire page every time something changes. Here is a brief overview
            of how React works: React uses components, which are like small
            building blocks that contain all the HTML, CSS, and JavaScript code
            needed for a particular piece of a user interface. When a component
            is rendered, React generates a virtual DOM. The virtual DOM is a
            copy of the actual DOM that lives in memory, rather than in the
            browser. React uses the virtual DOM to keep track of changes to the
            user interface, without rerendering the entire page every time
            something changes. Then React uses reconciliation to efficiently
            update the actual DOM. In this process, the virtual DOM keeps track
            of the component's state. When the component's State is changed the
            virtual DOM compares the old state to the new state using a diff
            algorithm and only updates the changed nodes and reflects the
            changes to UI.
          </div>
        </div>
      </div>
    </div>
  );
};

export default QA;
