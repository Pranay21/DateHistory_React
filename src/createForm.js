export const createForm = (config = { id: "", class: "" }) => {
  const form = document.createElement("form");

  const buttonBirth = document.createElement("button");
  const buttonDeath = document.createElement("button");

  form.id = config.id;

  buttonBirth.id = form.id + "-button-birth";
  buttonBirth.innerText = "Click here to Fetch the Birth Results !!!";

  buttonDeath.id = form.id + "-button-death";
  buttonDeath.innerText = "Click here to Fetch the Death Results !!!";

  form.appendChild(buttonBirth);
  form.appendChild(buttonDeath);

  document.body.appendChild(form);

  return form;
};
