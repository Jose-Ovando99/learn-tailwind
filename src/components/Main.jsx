import React from 'react';
import perfil1 from '../assets/perfil-1.png';

function Main({ alt, title, caption, autor, fecha }) {
  return (
    <main className='p-4'>
      <article className='overflow-hidden rounded bg-white shadow'>
        <div className='h-52'>
          <img 
          className='h-full w-full object-contain'
          src={perfil1} alt={alt} />
          </div>
        <div className='p-5 space-y-3'>
          <h3 className='text-sm font-semibold text-sky-500'>{title}</h3>
          <h2 className='text-xl font-semibold text-slate-800 leading-tight'>{caption}</h2>
          <p className='text-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, velit praesentium? Et modi voluptate non explicabo quasi! Quibusdam molestias error iure incidunt veniam unde corporis earum mollitia reprehenderit? Harum, quod!</p>
        </div>
        <div className='flex space-x-2 p-5'>
          <img className='h-10 w-10 rounded-full' src={'https://ui-avatars.com/api?name=' + autor} alt={autor} />
          <div className='flex flex-col justify-center'>
            <span className='text-sm font-semibold leading-4 text-slate-600'>{autor}</span>
            <span className='text-sm text-slate-500'>{fecha}</span>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Main;