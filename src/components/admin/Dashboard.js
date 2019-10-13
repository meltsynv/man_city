import React from 'react';

import AdminLayout from '../../Hoc/Admin_Layout';

const Dashboard = () => {
    return (
        <AdminLayout>
            <div className='user_dashboard'>
                This is your dashboard
            </div>
        </AdminLayout>
    );
};

export default Dashboard;