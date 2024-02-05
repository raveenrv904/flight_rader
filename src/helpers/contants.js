export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "8.757164049886603",
    bl_lng: "76.50634211311964",
    tr_lat: "15.414249016338971",
    tr_lng: "79.19679537138072",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "f93d2bdc20msh8e16de7b45efc07p19968djsn2ff706518bf5",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const detailOptions = {
  headers: {
    "X-RapidAPI-Key": "f93d2bdc20msh8e16de7b45efc07p19968djsn2ff706518bf5",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
