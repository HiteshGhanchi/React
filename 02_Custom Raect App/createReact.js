// remember if we export then always make jsx start from Capital Letter


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
