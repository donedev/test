import { Header, Footer } from "../../components"

function Template({children, isLayout = true}){
    return (
        <>
            <Header/>
            {children}
            <Footer/>                        
        </>
    )
    
}

export default Template