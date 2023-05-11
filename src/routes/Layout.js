import React from ‘react’;
import { Navigation } from ‘../components/Navigation’;
import { Outlet } from ‘react-router-dom’;
import { Container } from ‘react-bootstrap’;
function Layout(){
    return ( <>
        <Container className=“my-5”>
            <Navigation />
            <Outlet />
        </Container>
    </> )
}
export { Layout };