import { rest } from "msw";
import { BASE_URL } from "api";
import { PEOPLE_URL } from "api/people";
import { STARSHIP_URL } from "api/starships";

export const handlers = [
  rest.get(`${BASE_URL}${PEOPLE_URL}/:id`, (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        name: "Luke Skywalker",
        height: "172",
        mass: `${id}`,
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: "https://swapi.dev/api/planets/1/",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/",
        ],
        species: [],
        vehicles: [
          "https://swapi.dev/api/vehicles/14/",
          "https://swapi.dev/api/vehicles/30/",
        ],
        starships: [
          "https://swapi.dev/api/starships/12/",
          "https://swapi.dev/api/starships/22/",
        ],
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        url: "https://swapi.dev/api/people/1/",
      })
    );
  }),
  rest.get(`${BASE_URL}${STARSHIP_URL}/:id`, (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        name: "Death Star",
        model: "DS-1 Orbital Battle Station",
        manufacturer:
          "Imperial Department of Military Research, Sienar Fleet Systems",
        cost_in_credits: "1000000000000",
        length: "120000",
        max_atmosphering_speed: "n/a",
        crew: `${id}`,
        passengers: "843,342",
        cargo_capacity: "1000000000000",
        consumables: "3 years",
        hyperdrive_rating: "4.0",
        MGLT: "10",
        starship_class: "Deep Space Mobile Battlestation",
        pilots: [],
        films: ["https://swapi.dev/api/films/1/"],
        created: "2014-12-10T16:36:50.509000Z",
        edited: "2014-12-20T21:26:24.783000Z",
        url: "https://swapi.dev/api/starships/9/",
      })
    );
  }),
];
