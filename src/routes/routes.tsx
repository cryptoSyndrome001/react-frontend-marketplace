import {lazy} from "react";
import ComingSoon from "../pages/ComingSoon";
import withLayout from "../layouts/withLayout";
const Home = lazy(() => import('pages/Home'))
const Artworks = lazy(() => import('pages/Artworks'))
const Artists = lazy(() => import('pages/Artists'))
const Artwork = lazy(() => import('pages/Artwork'))
const Artist = lazy(() => import('pages/Artist'))
const About = lazy(() => import('pages/About'))
const HIW = lazy(() => import('pages/HIW'))
const ContactUs = lazy(() => import('pages/ContactUs'))
const Articles = lazy(() => import('pages/Articles'))
const HelpCenter = lazy(() => import('pages/HelpCenter'))
const NotFound = lazy(() => import('pages/NotFound'))
const Profile = lazy(() => import('pages/Profile'))




export const routes = [
    // {
    //     name: 'Coming Soon',
    //     path: '/',
    //     exact: true,
    //     component: ComingSoon,
    //     protected: false,
    // },
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: withLayout(Home),
        protected: false,
    },
    {
        name: 'Artworks',
        path: '/artworks',
        exact: true,
        component: withLayout(Artworks, true),
        protected: false,
    },
    {
        name: 'Artists',
        path: '/artists',
        exact: true,
        component: withLayout(Artists, true),
        protected: false,
    },
    {
        name: 'Artist',
        path: '/artists/:id',
        exact: true,
        component: withLayout(Artist, true),
        protected: false,
    },
    {
        name: 'Artwork',
        path: '/artworks/:id',
        exact: true,
        component: withLayout(Artwork, true),
        protected: false,
    },
    {
        name: 'About Us',
        path: '/about-us',
        exact: true,
        component: withLayout(About),
        protected: false,
    },
    {
        name: 'How it works',
        path: '/how-it-works',
        exact: true,
        component: withLayout(HIW),
        protected: false,
    },
    {
        name: 'Contact Us',
        path: '/contact-us',
        exact: true,
        component: withLayout(ContactUs),
        protected: false,
    },
    {
        name: 'Article',
        path: '/articles/:slug',
        exact: true,
        component: withLayout(Articles),
        protected: false,
    },
    {
        name: 'Help Center',
        path: '/help-center',
        exact: true,
        component: withLayout(HelpCenter),
        protected: false,
    },
    {
        name: 'My Profile',
        path: '/profile',
        exact: true,
        component: withLayout(Profile),
        protected: false,
    },
    {
        name: 'Not Found',
        path: '*',
        exact: true,
        component: withLayout(NotFound),
        protected: false,
    },
]
