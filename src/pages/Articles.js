import React, {useEffect} from 'react';

const Articles = () => {
  useEffect(() => {
    console.log('mounted articles');
  }, []);

  useEffect(() => {
    console.log('updated articles');
  });

  return <h1>Articles</h1>;
};

export default Articles;
