import React from "react";
import { render, RenderResult, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LaunchList from "./LaunchList";

afterEach(cleanup);

describe("LaunchList", () => {
  const mockData = {
    launchesPast: [
      {
        id: "104",
        launch_date_local: "2020-10-18T08:25:00-04:00",
        launch_success: true,
        launch_year: "2020",
        links: {
          flickr_images: [
            "https://live.staticflickr.com/65535/50500804918_eb1187e1b2_o.jpg",
            "https://live.staticflickr.com/65535/50501674637_f16f528728_o.jpg",
            "https://live.staticflickr.com/65535/50501515611_2a3753bed1_o.jpg",
            "https://live.staticflickr.com/65535/50501674632_0d5276b1b5_o.jpg",
          ],
        },
        mission_name: "Starlink-13 (v1.0)",
      },
    ],
  };
  const component: RenderResult = render(<LaunchList data={mockData} />);

  it("should display heading Launches", () => {
    expect(component.getByRole("heading", { level: 3 }).textContent).toBe(
      "Launches"
    );
  });
});
