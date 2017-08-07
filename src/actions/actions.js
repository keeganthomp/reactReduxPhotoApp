import { store } from "../index";
export const GET_IMAGES = "GET_IMAGES";
const API_KEY =
  "f419db831d090134a9edb85f412401fa4bebd7a634b35f3c72e452bdb95c8b19";

const getImage = payload => {
  return {
    type: GET_IMAGES,
    payload: payload
  };
};

export const imageGetter = img => {
  console.log("IMG:", img);
  fetch(
    `https://api.unsplash.com/search/photos/?query=${img}&client_id=${API_KEY}`
  )
    .then(response => {
      console.log("RESPONSE:", response);
      return response.json();
    })
    .then(data => {
      console.log("DATA:", data);
      store.dispatch(getImage(data));
    });
};
