import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));

const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));

const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);

export default function App() {
  return (
    <Suspense
      fallback={Loading.circle({
        svgColor: '#33ffff',
        cssAnimationDuration: 800,
        height: '200',
        width: '200',
      })}
    >
      {Loading.remove()}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetailsPage />}>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
