import Navbar from "../components/LandingPage/Navbar";
import Footer from "../components/LandingPage/Footer";

export default function RootLayout({ children }) {
    return (
      
          <div>
            <Navbar />
             {children}
             <Footer />
          </div>
         
         
        
    );
  }