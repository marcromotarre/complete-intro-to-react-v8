import { ICONS_PATH } from "../constants";

export default [
  {
    value: "marcromotarre@gmail.com",
    icon: `${ICONS_PATH}/contact/contact-email.svg`,
    click: () => {
      console.log("click on contact email");
    },
  },
  {
    value: "+34 654 654 066",
    icon: `${ICONS_PATH}/contact/contact-phone.svg`,
    click: () => {
      console.log("click on contact phone");
    },
  },
  {
    value: "Barcelona, Spain",
    icon: `${ICONS_PATH}/contact/contact-location.svg`,
    click: () => {
      console.log("click on contact location");
    },
  },
];
