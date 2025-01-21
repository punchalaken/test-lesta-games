import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { Loader } from "./Loader";
import style from "./Loader.module.scss";

describe("Тест компонента Loader", () => {
  let loaderImage: HTMLImageElement;

  beforeEach(() => {
    render(<Loader />);
    loaderImage = screen.getByAltText("Загрузочный экран");
  });

  test("Рендерится изображение с правильным src и alt", () => {
    expect(loaderImage).toBeInTheDocument();
    expect(loaderImage).toHaveAttribute("src", "/images/gif/loader.gif");
  });

  test("Изображение имеет правильный класс", () => {
    expect(loaderImage).toHaveClass(style.Loader);
  });
});
