import { render, screen } from "@testing-library/react";
import Progress from "./Progress";

describe("Progress", () => {
  it("renders total", () => {
    render(<Progress goal={246} total={123} />);

    expect(screen.getByRole("heading", { level: 2 }).textContent).toEqual(`Raised $123 of $246`);
  });

  describe.skip("Bonus", () => {
    it("renders a low percentage", () => {
      render(<Progress goal={200} total={50} />);

      expect(screen.getByRole("progressbar").textContent).toEqual(`25%`);
    });

    it("renders a high percentage", () => {
      render(<Progress goal={200} total={175} />);

      expect(screen.getByRole("progressbar").textContent).toEqual(`87.5%`);
    });
  });
});
