// file: src/qnd-react-dom.js
import * as snabbdom from 'snabbdom';
import propsModule from 'snabbdom/modules/props';

// propsModule -> this helps in patching text attributes
const reconcile = snabbdom.init([propsModule]);
// we need to maintain the latest rootVNode returned by render
let rootVNode;

// React.render(<App />, document.getElementById('root'));
// el -> <App />
// rootDomElement -> document.getElementById('root')
const render = (el, rootDomElement) => {
    // logic to put el into the rootDomElement
    // ie. QndReactDom.render(<App />, document.getElementById('root'));
    // happens when we call render for the first time
    if (rootVNode == null) {
        rootVNode = rootDomElement;
    }

    // remember the VNode that reconcile returns
    rootVNode = reconcile(rootVNode, el);
}

// to be exported like ReactDom.render
const QndReactDom = {
    render
};

export default QndReactDom;