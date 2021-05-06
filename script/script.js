import projects_data from "./projects.js";

const tech=(arr)=>{
    let r='';
    arr.forEach((name)=>{
        r+=`<span>${name}</span> `

    })
    return r;
}

const projects = () => {
    const div1 = document.getElementById("test");
    let q='';
  projects_data.forEach((project) => {
      const {id,name,link,image,techStack,desc}=project
    q +=
      `<div class="project">` +
      `<div class="image">` +
      `<img src="img/projectphoto.jpg" alt=""></div>` +
      `<div class="details">` +
      `<h3>${name}</h3>` +
      `<a href="${link}" target="_blank">Link</a>` +
      `<p>${desc}</p>`+
      `</div>`+
      `<div class="tech">
      <h3>Tech Stack:</h3><br>
      ${tech(techStack)}
      </div>`+
      `</div>`;
  });
  div1.innerHTML=q;
};

projects();
