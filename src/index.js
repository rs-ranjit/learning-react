import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
};

const secondBook ={
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book author= {firstBook.author} title={firstBook.title} img={firstBook.img} />
      <Book author= {firstBook.author} title={firstBook.title} img={firstBook.img}/>
      <Book author= {secondBook.author} title={secondBook.title} img={secondBook.img}/>
      <Book author= {secondBook.author} title={secondBook.title} img={secondBook.img}/>
    </section>
  );
}

const Book = ({img, title, author}) => {
  return (
    <article className='book'>
          <img src={img} alt={title}/>
    <h2>{title}</h2>;
    <h4> {author}</h4>;
    </article>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);