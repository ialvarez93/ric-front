import * as React from "react";

const address = ({ record = {}, source }) => (
  <a href={record[source]}>{record[source]}</a>
);

export default address;
