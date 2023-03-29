import "./form-input.styles.scss";

function FormInput(props) {
  const { label, ...otherProps } = props;

  return (
    <div className="group">
      <input {...otherProps} className="form-input" />
      {label && (
        <label
          className={`${otherProps.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
