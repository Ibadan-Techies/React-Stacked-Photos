import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import ReactStackedPhotos from "../src/components/StackedCarousel";

describe("StackedPhotos", () => {
  test("renders successfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ReactStackedPhotos>
        <div>1</div>
        <div>2</div>
      </ReactStackedPhotos>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  test("shallow renders without crashing", () => {
    let component = shallow(
      <ReactStackedPhotos>
        <div>1</div>
        <div>2</div>
      </ReactStackedPhotos>
    );
    expect(component.length).toBe(1);
  });
});
