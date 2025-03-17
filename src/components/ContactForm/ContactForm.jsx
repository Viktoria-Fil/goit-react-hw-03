import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be like this: 123-45-67")
    .required("Required"),
});

export default function ContactForm({ onAddContact }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = {
          id: nanoid(),
          ...values,
        };
        onAddContact(newContact);
        resetForm();
      }}
    >
      {() => (
        <Form>
          <ul className={css.Forma}>
            <li className={css.Input}>
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
              />
            </li>

            <li className={css.Input}>
              <label htmlFor="number">Number</label>
              <Field id="number" name="number" placeholder="123-45-67" />
              <ErrorMessage
                name="number"
                component="div"
                style={{ color: "red" }}
              />
            </li>

            <button className={css.Submit} type="submit">
              Add contant
            </button>
          </ul>
        </Form>
      )}
    </Formik>
  );
}
