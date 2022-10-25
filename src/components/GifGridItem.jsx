import React from 'react';

const GifGridItem = ({ id, url, title }) => {
  // console.log({id,title,url});

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export { GifGridItem };
