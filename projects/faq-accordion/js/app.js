import { faq } from "./faq-data.js";

const accordion = document.querySelector(".faq-accordion");

faq.forEach((element) => {
  accordion.innerHTML += `
    <h2 class="faq-accordion__label">
          <button
            id="faq-accordion__label-${element.id}"
            class="faq-accordion__trigger"
            role="button"
            aria-expanded="false"
            aria-controls="faq-accordion__infos-${element.id}"
          >
            <span>${element.question}</span>
            <img
              class="faq-accordion__trigger--close"
              src="./assets/images/icon-plus.svg"
              alt="plus icon"
            />
            <img
              class="faq-accordion__trigger--open hide"
              src="./assets/images/icon-minus.svg"
              alt="minus icon"
            />
          </button>
        </h2>
        <p
          id="faq-accordion__infos-${element.id}"
          class="faq-accordion__infos"
          role="region"
          aria-labelledby="faq-accordion__label-${element.id}"
        >
          ${element.answer}
        </p>
    `;
});

const triggers = document.querySelectorAll(".faq-accordion__label");
const regions = document.querySelectorAll(".faq-accordion__infos");
const openIcons = document.querySelectorAll(".faq-accordion__trigger--open");
const closeIcons = document.querySelectorAll(".faq-accordion__trigger--close");

const isOpen = new Array(4).fill(false);

triggers.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (isOpen[index]) {
      regions[index].classList.remove("open");
      openIcons[index].classList.add("hide");
      closeIcons[index].classList.remove("hide");
    } else {
      regions[index].classList.add("open");
      openIcons[index].classList.remove("hide");
      closeIcons[index].classList.add("hide");
    }
    isOpen[index] = !isOpen[index];
  });
});
