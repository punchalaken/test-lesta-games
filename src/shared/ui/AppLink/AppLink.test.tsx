import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MemoryRouter } from "react-router";

import style from "./AppLink.module.scss";
import { AppLink } from "./AppLink";

describe("Компонент AppLink", () => {
  const linkText = "Ссылка";
  const linkHref = "/";
  const linkObject = { path: "/", search: "?query=test" };
  const role = "link";
  let linkRender: HTMLLinkElement;

  test("Рендер ссылки с переданным текстом", () => {
    render(
      <MemoryRouter>
        <AppLink to={linkHref}>{linkText}</AppLink>
      </MemoryRouter>,
    );

    linkRender = screen.getByRole(role);

    expect(linkRender).toHaveTextContent(linkText);
  });

  test("Рендер ссылки с переданным классом active", () => {
    render(
      <MemoryRouter initialEntries={[linkHref]}>
        <AppLink to={linkHref}>{linkText}</AppLink>
      </MemoryRouter>,
    );

    linkRender = screen.getByRole(role);
    expect(linkRender).toHaveClass(style.active);
  });

  test("Рендер ссылки без переданного класса active", () => {
    render(
      <MemoryRouter initialEntries={[linkHref]}>
        <AppLink to="asdasd">{linkText}</AppLink>
      </MemoryRouter>,
    );

    linkRender = screen.getByRole(role);
    expect(linkRender).not.toHaveClass(style.active);
  });

  test("Рендер с объектом для атрибута to", () => {
    render(
      <MemoryRouter initialEntries={[linkObject]}>
        <AppLink to={linkObject}>{linkText}</AppLink>
      </MemoryRouter>,
    );

    linkRender = screen.getByRole(role);
    expect(linkRender).toHaveTextContent(linkText);
  });
});
