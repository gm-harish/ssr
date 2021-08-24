import React, {lazy, Suspense} from 'react';
// import One from './One';
// import Three from './Three';
// import Two from './Two';

const One = lazy(() => import('./One'));
const Two = lazy(() => import('./Two'));
const Three = lazy(() => import('./Three'));

//use should have default export for code splitting to work
const About = () => (
  <>
    <h1>about</h1>
    <Suspense fallback={<p>Loading COmponents.</p>}>
      <One />
      <Two />
      <Three />
    </Suspense>
  </>
);

export default About;
