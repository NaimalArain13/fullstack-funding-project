import Navbar from "../components/LandingPage/Navbar";

export default function RootLayout({ children }) {
    return (
      
          <div>
            <Navbar />
             {children}
             
          </div>
         
         
        
    );
  }