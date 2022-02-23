import api from "..";
import IPeople from "./interfaces";

export const PEOPLE_URL = "people";

const PeopleApi = {
  get: async (id: number): Promise<IPeople> => {
    const { data } = await api.get<IPeople>(`${PEOPLE_URL}/${id}`);
    data.mass = Number(data.mass);
    if (isNaN(data.mass)) data.mass = 0;
    return data;
  },
};

export default PeopleApi;
