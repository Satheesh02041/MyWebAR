let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
  video.srcObject = stream;
}).catch(() => alert('Cannot access camera'));

video.addEventListener('play', () => {
  const mappings = JSON.parse(localStorage.getItem("arMappings") || "[]");
  const processFrame = () => {
    if (video.paused || video.ended) return;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // You can implement OpenCV.js based feature matching here.
    // For now we log available mappings for illustration
    console.log("Live AR mappings:", mappings);

    requestAnimationFrame(processFrame);
  };
  processFrame();
});