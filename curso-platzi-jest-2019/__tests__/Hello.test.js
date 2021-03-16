import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Hello from "../src/components/Hello";

Enzyme.configure({ adapter: new Adapter() });

const data = { title: "Hi" };

describe("Hello Component", () => {
  test("Hello mounts", () => {
    const wrapper = shallow(<Hello title={data.title} />);

    const h1 = wrapper.find("h1");

    expect(h1.text()).toBe(data.title);
  });

  test("Hello snapshot", () => {
    const wrapper = shallow(<Hello title={data.title} />);

    const h1 = wrapper.find("h1");

    expect(h1.html()).toMatchSnapshot();
  });
});
