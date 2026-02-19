import React from 'react';

const BookCategory = ({ category }) => {
  return (
    <button
      className=" text-[#104674] dark:text-white  font-bold text-xl border-b-[#104674] dark:border-b-white border-b-2 "
    >
      {category}
    </button>
  );
}

export default BookCategory;
