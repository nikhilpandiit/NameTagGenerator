const name = document.getElementById("name");

const tagContainer = document.querySelector(".tags");

const nameGenerator = () => {
  if (name.value === "") {
    return null; // Return null measn there is no value so function quites
  }
  const tag = document.createElement("div");
  tag.setAttribute("class", "tag");

  tag.innerText = `Hey my name is ${name.value}`;

  tagContainer.append(tag);
};
