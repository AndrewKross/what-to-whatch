import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      moviesList = {[{
        title: `Revenant`,
        src: `./img/revenant.jpg`,
        id: `1`,
      },
      {
        title: `War of the Worlds`,
        src: `./img/war-of-the-worlds.jpg`,
        id: `2`,
      },
      {
        title: `Snatch`,
        src: `./img/snatch.jpg`,
        id: `3`,
      }]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
