function customrender(Reactelement, maincContainer) {
    // const domelelement = document.createElement(Reactelement.type)
    // domelelement.innerHTML = Reactelement.children
    // domelelement.setAttribute('href', Reactelement.props.href)
    // domelelement.setAttribute('target', Reactelement.props.target)
    // container.appendChild(domelelement)

    const domelement = document.createElement(Reactelement.type)
    domelement.innerHTML = Reactelement.children
    for (const prop in Reactelement.props) {
        if (prop == 'children') {
            continue
        }
        domelement.setAttribute(prop, Reactelement.props[prop])

    }
    maincContainer.appendChild(domelement)
}






const Reactelement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    children: 'click me to visit google',
}


const maincContainer = document.querySelector('#root')

customrender(Reactelement, maincContainer)