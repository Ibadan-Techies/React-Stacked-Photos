import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import ReactStackedPhotos from "../src";

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

  test("click exchanges last image with first", () => {
    const onClickMock = jest.fn();
    let component = shallow(
      <ReactStackedPhotos>
        <div>1</div>
        <div>2</div>
      </ReactStackedPhotos>
    );
    const children = component.find(".img"),
      first = children.at(0),
      last = children.at(children.length - 1);

    // check the ReactStackedPhotos props value
    expect(first.text()).toEqual("2");
    expect(last.text()).toEqual("1");

    component.simulate("click");

    // recheck after the component is clicked
    expect(first.text()).toEqual("1");
    expect(last.text()).toEqual("2");
  });
});
