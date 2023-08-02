import { unmountComponentAtNode,render } from "react-dom";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom/client";
import { CountInc } from "./Count";

let container=null
beforeEach(()=>{
    container=document.createElement('div');
    document.body.appendChild(container)
})

it('test increment count',()=>{
    act(() => {
      render(<CountInc />, container);
    });
    const h1Ref=document.querySelector('h1')
    expect(h1Ref.textContent).toBe("0");
    const btnRef=document.querySelector('button')
    act(() => {
        btnRef.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    expect(h1Ref.textContent).toBe("1");
    for (let i = 0; i < 5; i++) {
    act(() => {
            btnRef.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    }
    expect(h1Ref.textContent).toBe("6");
})

afterEach(()=>{
    unmountComponentAtNode(container)
    container.remove()
    container=null
})