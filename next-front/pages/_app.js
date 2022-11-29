import NavBar from "../components/NavBars";

export default function App({ Compoent, pageProps }) {
    return (
        <div>
            <NavBar/>
            <Component {...pageProps}/>
            <span>hello</span>
            <style jsx global>{`
                
            `}</style>
        </div>
        
    )
}