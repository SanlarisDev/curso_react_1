import React from 'react'

const newMessage = {
  message: 'Hola Mundo',
  title: 'Fernando'
};

const getResult = (a, b) => a+b;

export const FirstApp = ( ) => {
  return (
    <>
      <h1>{ newMessage.message }</h1>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      <h3>Suma: { getResult(1,2) }</h3>
      <p>Soy un subtítulo</p>
    </>
  );
}
