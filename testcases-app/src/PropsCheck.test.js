import { unmountComponentAtNode } from 'react-dom'
import ReactDOM from 'react-dom/client'
import { act } from 'react-dom/test-utils'
import { PropsCheck } from './PropsCheck'
let container=null 
let h1Ref=null
beforeEach(()=>{
    container=document.createElement('div')
    document.body.appendChild(container)
})

it('check without prop',()=>{
    act(()=>{
        const root=ReactDOM.createRoot(container)
        root.render(<PropsCheck />)
    })
    h1Ref=document.querySelector('h1')
    expect(h1Ref.textContent).toBe('Hellow Dhoni')
    container.removeChild(h1Ref)
})

it('check with prop',()=>{
    act(()=>{
        const root=ReactDOM.createRoot(container)
        root.render(<PropsCheck name='UV' />)
    })
    h1Ref=document.querySelector('h1')
    expect(h1Ref.textContent).toBe('Hellow UV')
    container.removeChild(h1Ref)
})

afterEach(()=>{
  unmountComponentAtNode(container)
  container.remove()
  container=null
})