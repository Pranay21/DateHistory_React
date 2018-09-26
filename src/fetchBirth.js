import { fetchDayEvent } from "./history";
import { createForm } from "./createForm";

const ul = document.createElement("ul");
export const fetchDayInfo = () => {
  fetchDayEvent().then(repoObjs => {
    repoObjs.data.Births.map(repoItem => {
      console.log("Birth here");
      const li = document.createElement("li");
      li.innerText = repoItem.text;
      ul.appendChild(li);
    });
  });

  return document.body.appendChild(ul);
};
