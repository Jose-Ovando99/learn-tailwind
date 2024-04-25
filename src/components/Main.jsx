import React from 'react';

function Main({ alt, title, caption, autor, fecha  }) {
  return (
    <main className='p-4'>
      <article>
        <div><img src='https://ui-avatars.com/api?name=Ivan+Ovando' alt={alt} /></div>
        <div>
          <h3>{title}</h3>
          <h2>{caption}</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, velit praesentium? Et modi voluptate non explicabo quasi! Quibusdam molestias error iure incidunt veniam unde corporis earum mollitia reprehenderit? Harum, quod!</p>
        </div>
        <div>
          <img src={'https://ui-avatars.com/api?name=' + autor} alt={autor} />
          <div>
            <span>{autor}</span>
            <span>{fecha}</span>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Main;