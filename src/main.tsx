import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import App from './App.tsx'
import './index.css'
import '../i18n.ts';

import PokemonDemoPage from './pages/pokemon-demo/pokemon-demo.tsx';
import { ROUTES } from './constants/routes.ts';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: ROUTES.ROOT,
        element: <App />,
    },
    {
        path: ROUTES.POKEMON,
        element: <PokemonDemoPage />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </StrictMode>,
)
