import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Stars from "../src/components/Stars";
// @vitest-environment happy-dom

describe("Stars component", () => {
  it("should render the correct text", () => {
    const { container } = render(<Stars rating={0}></Stars>);
    expect(container).toBeTruthy();
  });
  it("renders 5 stars with rating of 5", () => {
    const { container } = render(<Stars rating={5} />);
    const stars = container.firstChild?.childNodes;
    expect(stars?.length).toBe(5);

    // expect(stars?.[0]).toHaveProperty("class", "fill");
    // expect(stars![1]).toHaveProperty("class", "fill");
    // expect(stars![2]).toHaveProperty("class", "fill");
    // expect(stars![3]).toHaveProperty("class", "fill");
    // expect(stars![4]).toHaveProperty("class", "fill");
  });
  /**
  it("renders 3 stars with rating of 3", () => {
    const { container } = render(<Stars rating={3} />);
    const stars = container.querySelectorAll(".star");
    expect(stars.length).toBe(5);
    expect(stars[0]!).toHaveProperty("class", "fill");
    expect(stars[1]!).toHaveProperty("class", "fill");
    expect(stars[2]!).toHaveProperty("class", "fill");
    expect(stars[3]!).not.toHaveProperty("class", "fill");
    expect(stars[4]!).not.toHaveProperty("class", "fill");
  });

  it("renders 0 stars with rating of 0", () => {
    const { container } = render(<Stars rating={0} />);
    const stars = container.querySelectorAll(".star");
    expect(stars.length).toBe(5);
    expect(stars[0]!).not.toHaveProperty("class", "fill");
    expect(stars[1]!).not.toHaveProperty("class", "fill");
    expect(stars[2]!).not.toHaveProperty("class", "fill");
    expect(stars[3]!).not.toHaveProperty("class", "fill");
    expect(stars[4]!).not.toHaveProperty("class", "fill");
  }); */
});
