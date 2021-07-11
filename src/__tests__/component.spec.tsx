import * as React from "react";
import Hello from "../Hello";
// import renderer from "react-test-renderer";
import * as renderer from "react-test-renderer";

test("TEST SUIT", () => {
  const component = renderer.create(<Hello text="World" />);
  const testInstance = component.root;

  expect(testInstance.findByType(Hello).props.text).toBe("World");

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
