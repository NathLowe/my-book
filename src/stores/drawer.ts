import { create } from 'zustand'
import { DrawerInterface, Drawer } from 'flowbite';


interface States{
    drawer:DrawerInterface|null,
    isOpen:boolean,
    search: string,
}

interface Actions{
    toggleDrawer:()=>void,
    openDrawer:()=>void,
    hideDrawer:()=>void,
    setSearch:(newSearch:string)=>void,
    initializeDrawer:(newDrawer:DrawerInterface)=>void
}

export const useDrawer = create<States&Actions>((set,get) => ({
    drawer: null,
    isOpen:false,
    search: "",
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
    setSearch: (newSearch:string)=>{
        set((state)=>({search: newSearch}))
    },
    initializeDrawer: (newDrawer:DrawerInterface) => set((state) => ({ drawer: newDrawer })),
}))