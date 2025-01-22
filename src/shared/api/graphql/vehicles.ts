import { gql } from "@apollo/client";

export const GET_VEHICLES = gql`
  query GetVehicles($lang: String) {
    vehicles(lang: $lang) {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`;
