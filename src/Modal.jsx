/* eslint-disable react/prop-types */
import "./Modal.css";
import { ExpensesNew } from "./ExpensesNew";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
          <ExpensesNew />
        </section>
      </div>
    );
  }
}
