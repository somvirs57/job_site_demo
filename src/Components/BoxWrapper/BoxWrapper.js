const BoxWrapper = (props) => {
  const boxClass = props.styleClass.toString().toLowerCase() + "-box ui-box";
  return (
    <div className={boxClass}>
      <div className="ui-box-content">
        <p className="section-heading">{props.heading}</p>
        {props.children}
      </div>
    </div>
  );
};

export default BoxWrapper;
