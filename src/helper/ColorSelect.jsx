import React from "react";
import Select, { components } from "react-select";

const Option = ({ data, ...props }) => {
  return (
    <components.Option {...props}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "10px",
            height: "10px",
            marginRight: "10px",
            backgroundColor: data.color,
          }}
        ></div>
        {data.label}
      </div>
    </components.Option>
  );
};

const ReactSelectWithColorBox = (props) => {
  return (
    <Select
      options={props.option}
      components={{ Option }}
      onChange={props.handleOnChange}
    />
  );
};

export default ReactSelectWithColorBox;
