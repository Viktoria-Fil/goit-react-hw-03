import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.Filter}>
      <label>Find contacts by name</label>
      <input id="search" type="text" value={value} onChange={onChange}></input>
    </div>
  );
}
