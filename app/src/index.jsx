import React from "react";
import ReactDom from "react-dom";

import FilterableProductTable from './components/FilterableProductTable.jsx'

const app = document.getElementById("app");

ReactDom.render(<FilterableProductTable/>, app);