import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
    const links = [
        {
            title: 'Matches',
            linkTo: '/admin_matches'
        },
        {
            title: 'Add Match',
            linkTo: '/admin_matches/edit_match'
        },
        {
            title: 'Player',
            linkTo: '/admin_player'
        },
        {
            title: 'Players',
            linkTo: '/admin_player/add_players'
        },
    ]
    const renderItems = () => (
        links.map(link => {
            <Link to={link.linkTo} key={link.title}>

            </Link>
        })
    )

    return (
        <div>
            {renderItems()}
        </div>
    );
};

export default AdminNav;