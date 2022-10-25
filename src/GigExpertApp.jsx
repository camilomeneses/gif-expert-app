import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GigExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory);
    // categories.push(newCategory);
    // setCategories( cat => [...cat, 'Valorant']);

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* titulo  */}
      <h1>GigExpertApp</h1>

      {/* Input */}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* Listado de Gifs */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* Gif Item */}
    </>
  );
};

export default GigExpertApp;
