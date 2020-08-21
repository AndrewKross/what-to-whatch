import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer.jsx";

test(`Footer should render correctly`, () => {
  const tree = renderer
    .create(<Footer />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
