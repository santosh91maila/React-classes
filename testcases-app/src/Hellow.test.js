import { act } from "react-dom/test-utils"
import { Hellow } from "./Hellow"
import {unmountComponentAtNode} from 'react-dom'
import ReactDOM from 'react-dom/client';
let container=null 

beforeEach(()=>{
    container=document.createElement('div')
    document.body.appendChild(container)
})

it("test static text",()=>{
    act(() => {
        const root=ReactDOM.createRoot(container)
        root.render(<Hellow />, container);
    });
    const h1Ref=document.querySelector('h1')
    expect(h1Ref.textContent).toBe('Hellow Sachin')
})

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });