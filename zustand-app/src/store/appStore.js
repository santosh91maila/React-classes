import {create} from "zustand";
import { init } from "../utils/init";

export const useStore=create((set,get)=>{
     return {
        ...init,
        set,
        get
     }
})