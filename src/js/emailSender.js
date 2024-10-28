import $ from "jquery";
import config from "../config";
import emailjs from "emailjs-com";

const sendEmailConsulta = async (formData) => {
  emailjs
    .send(
      config.emailServiceId, // replace with your EmailJS Service ID
      config.emailTemplateConsulta, // replace with your EmailJS Template ID
      formData,
      config.emailUserId // replace with your EmailJS User ID
    )
    .then(
      (result) => {
        alert("Email sent successfully!");
        console.log(result.text);
      },
      (error) => {
        alert("Error sending email. Try again.");
        console.error(error.text);
      }
    );
};
// const sendEmailReserva = async (formData) => {
//   console.log(formData);
//   var data = {
//     service_id: config.emailServiceId,
//     template_id: config.emailTemplateReserva,
//     user_id: config.emailUserId,
//     template_params: {
//       to_name: "Admin",
//       from_name: formData.name,
//       from_email: formData.email,
//       from_date: formData.startDate,
//       to_date: formData.endDate,
//       adults_p: formData.adults,
//       kids_p: formData.children,
//       message: formData.message,
//     },
//   };
//   try {
//     $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
//       type: "POST",
//       data: JSON.stringify(data),
//       contentType: "application/json",
//     })
//       .done(function () {
//         alert("Your mail is sent!");
//       })
//       .fail(function (error) {
//         alert("Oops... " + JSON.stringify(error));
//       });
//   } catch (error) {
//     return console.error({ error });
//   }
// };

const sendEmailReserva = async (formData) => {
  console.log(formData);
  emailjs
    .send(
      config.emailServiceId, // replace with your EmailJS Service ID
      config.emailTemplateReserva, // replace with your EmailJS Template ID
      formData,
      config.emailUserId // replace with your EmailJS User ID
    )
    .then(
      (result) => {
        alert("Email sent successfully!");
        console.log(result.text);
      },
      (error) => {
        alert("Error sending email. Try again.");
        console.error(error.text);
      }
    );
};

export { sendEmailConsulta, sendEmailReserva };
