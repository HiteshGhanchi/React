// remember if we export then always make jsx start from Capital Letter
// react tree has attribute and children 

function customRender(container,object){
    const domElement = document.createElement(object.type);
    domElement.innerHTML = object.children;
    
    for (const prop in object.props) {
        if(prop==="children") continue;
       domElement.setAttribute(prop,object.props[prop]);
    }

    container.appendChild(domElement)
}

//this is how react stores the element as, remember their keys name may differ
const oneELement = {
    type:"a",
    props:{
        href:"https://www.google.com",
        target:"_blank",
    },
    children:"Visit Google Website",
}

const root = document.getElementById("root")

customRender(root,oneELement);
