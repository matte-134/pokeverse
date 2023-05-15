import React from "react";

function Layout() {
    return(
        <div data-testid='app'>
        <Navigation />
        <Outlet />
</div>
    );
}