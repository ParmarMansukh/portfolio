document.getElementById("midBtn").addEventListener("click", function () {
  const targetSection = document.querySelector("#projectheader");
  targetSection.scrollIntoView({
    top: 0,
    behavior: "smooth",
  });
});

document.getElementById("endbtn").addEventListener("click", function () {
  const targetSection = document.querySelector("#aboutheader");
  targetSection.scrollIntoView({
    top: 0,
    behavior: "smooth",
  });
});
