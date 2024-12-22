import  './App.css'
import AppFeatures from './assets/AppFeatures'

function App() {


return (
<div className="wrapper">
 <Header />
 <main id="main">
    <Hero />
    <Brands />
    <AppFeatures />
    <Hdiw />
    <AppTransfers />
    <AppContacts />
    <Testimonials />
    <FAQ />
    <ContactForm />
    <Subscribe />
    <Footer />
 </main>
</div>


)
}
// src/App.jsx
import Header from './Header';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import ContactForm from './ContactForm';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
    </div>
  );
}


export default App