import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { Button } from "./Button";

describe("Компонент Button", () => {
  const handleClick = vi.fn();
  const buttonTestId = "sadasd";
  const buttonValue = "Переданный тест";
  const buttonClass = "active";
  let button: HTMLButtonElement;

  test("Рендер кнопки с переданным текстом", () => {
    render(<Button data-testid={buttonTestId}>{buttonValue}</Button>);

    button = screen.getByTestId(buttonTestId);

    expect(button).toHaveTextContent(buttonValue);
  });

  test("Отрисовка кнопки с переданным классом и текстом", () => {
    render(
      <Button className={buttonClass} data-testid={buttonTestId}>
        {buttonValue}
      </Button>,
    );

    button = screen.getByTestId(buttonTestId);

    expect(button).toHaveClass(buttonClass);
    expect(button).toHaveTextContent(buttonValue);
  });

  test("Проверка клика - 2 раза", () => {
    render(
      <Button onClick={handleClick} data-testid={buttonTestId}>
        {buttonValue}
      </Button>,
    );

    button = screen.getByTestId(buttonTestId);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  test("Проверка disabled состояния кнопки", () => {
    render(
      <Button data-testid={buttonTestId} disabled>
        {buttonValue}
      </Button>,
    );

    button = screen.getByTestId(buttonTestId);

    expect(button).toBeDisabled();
  });
});
