import projects_data from "./projects.js";

const tech = (arr) => {
  let r = "";
  arr.forEach((name) => {
    r += `<span>${name}</span> `;
  });
  return r;
};

const projects = () => {
  const div1 = document.getElementById("test");
  let q = "";
  projects_data.forEach((project) => {
    const { id, name, link, image, techStack, desc } = project;
    q +=
      `<div class="project">` +
      `<div class="image">` +
      `<img src="img/projectphoto.jpg" alt="${name}" onclick="window.open('${link}', '_blank');"></div>` +
      `<div class="details">` +
      `<a href="${link}" target="_blank"><h2>${name}</h2></a>` +
      `<p>${desc}</p>` +
      `</div><br>` +
      `<div class="tech">
      <h3>Tech Stack:</h3>
      ${tech(techStack)}
      </div>` +
      `</div>`;
  });
  div1.innerHTML = q;
};

projects();
