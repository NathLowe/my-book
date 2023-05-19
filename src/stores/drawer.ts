import { create } from 'zustand'
import { DrawerInterface, Drawer } from 'flowbite';


interface States{
    drawer:DrawerInterface|null,
    isOpen:boolean
}

interface Actions{
    toggleDrawer:()=>void,
    openDrawer:()=>void,
    hideDrawer:()=>void,
    initializeDrawer:(newDrawer:DrawerInterface)=>void
}

export const useDrawer = create<States&Actions>((set,get) => ({
    drawer: null,
    isOpen:false,
    toggleDrawer: ()=>{
        let drawer = get().drawer
        if(drawer !== null){
            drawer.toggle()
            set((state)=>({isOpen:!state.isOpen}))
        }
    },
    openDrawer: ()=>{
        let drawer = get().drawer
        if(drawer !== null){
            drawer.show()
            set((state)=>({isOpen:true}))
        }
    },
    hideDrawer: ()=>{
        let drawer = get().drawer
        if(drawer !== null){
            drawer.hide()
            set((state)=>({isOpen:false}))
        }
    },
    initializeDrawer: (newDrawer:DrawerInterface) => set((state) => ({ drawer: newDrawer })),
}))