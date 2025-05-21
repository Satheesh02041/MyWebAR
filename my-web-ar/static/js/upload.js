document.getElementById("uploadForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const marker = document.getElementById("markerInput").files[0];
    const image = document.getElementById("imageTarget").files[0];
    const text = document.getElementById("textTarget").value;
  
    const readFile = (file) => new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  
    const markerDataUrl = await readFile(marker);
    const targets = [];
  
    if (image) targets.push({ type: "image", data: await readFile(image) });
    if (text) targets.push({ type: "text", data: text });
  
    const existing = JSON.parse(localStorage.getItem("arMappings") || "[]");
    existing.push({ markerDataUrl, targets });
    localStorage.setItem("arMappings", JSON.stringify(existing));
  
    alert("Mapping saved!");
    window.location.href = "/manage";
  });