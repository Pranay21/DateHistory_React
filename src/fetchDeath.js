import { fetchDayEvent } from "./history";
import { createForm } from "./createForm";

const ul = document.createElement("ul");
export const fetchDeathInfo = () => {
  fetchDayEvent().then(repoObjs => {
    repoObjs.data.Deaths.map(repoItem => {
      console.log("Death here");
      const li = document.createElement("li");
      li.innerText = repoItem.text;
      ul.appendChild(li);
    });
  });

  return document.body.appendChild(ul);
};
