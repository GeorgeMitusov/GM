import { useState } from "react";
import emailjs from "emailjs-com";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [messageShow, setMessageShow] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (
    values: {
      name: string;
      email: string;
      message: string;
    },
    { resetForm }: { resetForm: () => void }
  ) => {
    const { name, email, message } = values;
    setLoading(true);

    const serviceId: string = "service_kxmglya";
    const templateId: string = "personal_gmail";
    const userId: string = "X6BZThkDbGkN2NKjC";

    const formData = {
      name,
      email,
      message,
    };

    emailjs.send(serviceId, templateId, formData, userId).then(
      (result) => {
        console.log(result.text);
        setLoading(false);
        setMessageShow(true);
      },
      (error) => {
        console.log(error.text);
        setLoading(false);
      }
    );

    resetForm();
  };

  const succMsg = (
    <motion.div
      role="alert"
      className="alert w-full md:w-5/6 h-10 mb-3 flex justify-between items-center 
        shadow-customShadow bg-gradient"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-thirdColor shrink-0 w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span className="text-xs md:text-sm"> Your message has been sent. </span>
      <div>
        <button
          className="btn btn-xs md:btn-sm btn-gradient"
          onClick={() => setMessageShow(false)}
        >
          {" "}
          Close{" "}
        </button>
      </div>
    </motion.div>
  );

  return (
    <dialog id="my_modal_2" className="modal">
      <div
        className="modal-box w-5/6 max-w-3xl h-3/4 4xl:h-2/4 bg-mainColor border-secondaryColor
          border-2 flex flex-col items-center justify-center"
      >
        <AnimatePresence>{messageShow && succMsg}</AnimatePresence>

        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="w-full md:w-5/6 h-3/4 4xl:h-4/5 flex items-center justify-center">
              <div className="w-full h-5/6 flex flex-col items-center justify-between ">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className={`w-full h-12 input input-bordered input-secondaryColor shadow-customShadow
                    border border-secondaryColor text-thirdColor bg-gradient 
                    ${errors.name && touched.name ? "border-thirdColor" : ""}
                  `}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-thirdColor text-sm md:text-md"
                />

                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className={`w-full h-12 input input-bordered input-mainColor shadow-customShadow 
                    border border-secondaryColor text-thirdColor  
                    bg-gradient ${errors.email && touched.email ? "border-thirdColor" : ""}
                  `}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-thirdColor text-sm md:text-md"
                />

                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Message"
                  className={`w-full h-18 textarea textarea-thirdColor shadow-customShadow 
                    border border-secondaryColor text-thirdColor bg-gradient 
                    ${
                      errors.message && touched.message
                        ? "border-thirdColor"
                        : ""
                    }
                  `}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-thirdColor text-sm md:text-md"
                />

                <button
                  type="submit"
                  className="w-full btn btn-outline bg-gradient shadow-customShadow
                   text-thirdColor border-secondaryColor px-4 py-2 rounded hover:bg-secondaryColor 
                   hover:text-thirdColor"
                >
                  {loading ? (
                    <span className="loading loading-spinner text-thirdColor loading-md"></span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
