import React from 'react';
import  ReactDOM  from 'react-dom/client';

const parent=React.createElement("div",{id:"parent"},
[React.createElement("div"
,{id:"child"},
[React.createElement("h1",{id:"heading"},"Namaste React 🚀"  ,
React.createElement("h2",{id:"heading"},"Virshree 💘"  ))
,
React.createElement("div"
,{id:"child2"},
[React.createElement("h1",{id:"heading"},"I'm a h1 tag",
React.createElement("h2",{id:"heading"},"I'm a h2 tag"))])

])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
console.log(parent);//object
