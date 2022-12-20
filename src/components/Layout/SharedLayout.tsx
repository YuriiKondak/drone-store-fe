import { Suspense, useContext } from 'react';
import { HeaderSimple } from "../header/Header"
import { FooterCentered } from "../FooterLinks/FooterLinks"
import { Outlet } from "react-router-dom";
import { AuthContext } from '../../auth/AuthContext';


const data = [
    {
        "link": "#",
        "label": "Contact"
    },
    {
        "link": "#",
        "label": "Privacy"
    },
    {
        "link": "#",
        "label": "Blog"
    },
    {
        "link": "#",
        "label": "Store"
    },
    {
        "link": "#",
        "label": "Careers"
    }
]

function SharedLayout() {
    const { user } = useContext(AuthContext);

    const getLinks = () => {
        const links = [
            {
                "link": "/",
                "label": "Store"
            },
            {
                "link": "/pricing",
                "label": "Pricing"
            },
            {
                "link": "/cart",
                "label": "Cart"
            }
        ]

        if (user) {
            links.push({
                "link": "/users/account",
                "label": "Account"
            })

            links.push({
                "link": "/users/sign_out",
                "label": "Logout"
            })
        }
        else {
            links.push({
                "link": "/users/sign_in",
                "label": "Login"
            })
        }

        return links;
    }

    return (
        <div className="App">
            <HeaderSimple links={getLinks()} />
            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
            </Suspense>
            <FooterCentered links={data}></FooterCentered>
        </div>
    );
}

export default SharedLayout;
