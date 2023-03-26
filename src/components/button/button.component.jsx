import "./button.styles.scss";

const BUTTON_TYPE = {
  google: "google-sign-in",
  inverted: "inverted",
};

function Button(params) {
  const { buttonType, ...otherProps } = params;
  return (
    <button
      className={`button-container ${BUTTON_TYPE[buttonType]}`}
      {...otherProps}
    >
      {params.children}
    </button>
  );
}

export default Button;
