import { describe, expect, test } from "vitest";
import {
  initialState,
  setOrderList,
  setShip,
  setSortBy,
  shipsSlice,
} from "./shipSlice";
import { Ship } from "@entities/ships/model/types";

describe("Тестирование слайса shipSlice", () => {
  const shipList: Ship[] = [
    {
      title: "Ship A",
      description: "Description A",
      icons: {
        large: "largeA",
        medium: "mediumA",
      },
      level: 4,
      type: {
        icons: {
          default: "defaultTypeA",
        },
        name: "Cruiser",
        title: "Cruiser",
      },
      nation: {
        color: "#000000",
        icons: {
          large: "largeA",
          medium: "mediumA",
          small: "smallA",
        },
        name: "USA",
        title: "USA",
      },
    },
    {
      title: "Ship B",
      description: "Description B",
      icons: {
        large: "largeB",
        medium: "mediumB",
      },
      level: 3,
      type: {
        icons: {
          default: "defaultTypeB",
        },
        name: "Cruiser",
        title: "Cruiser",
      },
      nation: {
        color: "#000000",
        icons: {
          large: "largeB",
          medium: "mediumB",
          small: "smallB",
        },
        name: "USSR",
        title: "USSR",
      },
    },
  ];
  
  const shipListSortedByLevel = [
    {
      title: "Ship B",
      description: "Description B",
      icons: {
        large: "largeB",
        medium: "mediumB",
      },
      level: 3,
      type: {
        icons: {
          default: "defaultTypeB",
        },
        name: "Cruiser",
        title: "Cruiser",
      },
      nation: {
        color: "#000000",
        icons: {
          large: "largeB",
          medium: "mediumB",
          small: "smallB",
        },
        name: "USSR",
        title: "USSR",
      },
    },
    {
      title: "Ship A",
      description: "Description A",
      icons: {
        large: "largeA",
        medium: "mediumA",
      },
      level: 4,
      type: {
        icons: {
          default: "defaultTypeA",
        },
        name: "Cruiser",
        title: "Cruiser",
      },
      nation: {
        color: "#000000",
        icons: {
          large: "largeA",
          medium: "mediumA",
          small: "smallA",
        },
        name: "USA",
        title: "USA",
      },
    },
  ];

  test("проверка начального состояния", () => {
    expect(initialState.ships).toEqual([]);
    expect(initialState.sortOrder).toEqual("ascending");
  });

  test("проверка setShip", () => {
    const newState = shipsSlice.reducer(initialState, setShip(shipList));
    expect(newState.ships).toEqual(shipList);
  });

  test("проверка setOrderList", () => {
    let newState = shipsSlice.reducer(initialState, setOrderList("descending"));
    expect(newState.sortOrder).toEqual("descending");
    newState = shipsSlice.reducer(initialState, setOrderList("ascending"));
    expect(newState.sortOrder).toEqual("ascending");
  });

  test("проверка setSortBy", () => {
    let newState = shipsSlice.reducer(initialState, setShip(shipList));
    expect(newState.ships).toEqual(shipList);
    newState = shipsSlice.reducer(newState, setSortBy("level"));
    expect(newState.ships).toEqual(shipListSortedByLevel);
  });
});
