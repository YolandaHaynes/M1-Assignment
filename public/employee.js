let sally = "Sally Smith";
let mark = "Mark Martin";
let holly = "Holly Unlikely";
let amol = "Amol Shookup";
let robin = 'Robin Banks';
let aaron = 'Aaron D. Tyres';
let daryl = 'Daryl B. Payne';
let susan = 'Susan Q';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    color: "blue",
    fontSize: "24px"
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, aaron), /*#__PURE__*/React.createElement("li", null, daryl), /*#__PURE__*/React.createElement("li", null, susan));
ReactDOM.render(element, document.getElementById("content"));