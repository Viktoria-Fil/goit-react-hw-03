import css from "./Contact.module.css";
import { IoIosPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <li className={css.Contact}>
      <ul>
        <li className={css.Name}>
          <IoIosPerson />
          {name}
        </li>
        <li className={css.Name}>
          <FaPhoneAlt />
          {number}
        </li>
      </ul>
      <button className={css.Delete} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
