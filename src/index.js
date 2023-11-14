import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

const Booklist = () =>{
return(
  <section className='booklist'>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    
  </section>
);
}

const Book = () => {
return(
  <article className='book'>
    <Image/>
    <Title/>
    <Author/>
  </article>
);
}

const Image = () => (<img src="https://images-eu.ssl-images-amazon.com/images/I/715qi-cIbML._AC_UL600_SR600,400_.jpg" alt="Don't Believe Everything You Think"/>)
const Title = () => <h2>Don't Believe Everything You Think</h2>
const Author = () => <h3>Joseph Nguyen</h3>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist/>);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


