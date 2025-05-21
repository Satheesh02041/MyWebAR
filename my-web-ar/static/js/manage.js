window.onload = () => {
    const data = JSON.parse(localStorage.getItem("arMappings") || "[]");
    const display = document.getElementById("dataDisplay");
  
    data.forEach((map, idx) => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>Marker ${idx + 1}</h3><img src="${map.markerDataUrl}" width="100"><ul></ul>`;
      const ul = div.querySelector("ul");
  
      map.targets.forEach(target => {
        const li = document.createElement("li");
        if (target.type === "image") li.innerHTML = `<img src="${target.data}" width="100">`;
        else if (target.type === "text") li.textContent = target.data;
        ul.appendChild(li);
      });
  
      display.appendChild(div);
    });
  };