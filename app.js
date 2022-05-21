const btn = document.querySelectorAll("button");

btn.forEach((item) => {
  item.addEventListener("click", () => {
    const questions = item;
    const answers = item.nextElementSibling;

    // add

    if (item.classList.contains("active")) {
      answers.classList.toggle("open");
      questions.classList.toggle("active");
    } else {
      //Avoiding to open multiple accordions at the same time
      document
        .querySelectorAll("button")
        .forEach((item) => item.classList.remove("active"));
      item.classList.add("active");

      document
        .querySelectorAll(".faq-content")
        .forEach((content) => content.classList.remove("open"));
      answers.classList.add("open");
    }
  });
});
