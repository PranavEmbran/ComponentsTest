import React, { useState } from 'react';
import Header from './Header';
import SectionHeading from './SectionHeading';
import ButtonWithGradient from './ButtonWithGradient';
const NewPge = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };
    return (
        <>
        <Header sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />

        <div className="main-container">
        <div>
            <h1 style={{ color: 'red' }}>New Page</h1>
        </div>


        <SectionHeading
          title="Dashboard"
          subtitle="Overview and quick stats for dialysis management"
        />

        <ButtonWithGradient
          className="my-new-class"
          text="Fallback text"
          onClick={() => alert('Hello!')}
          type="submit"
        >
          <strong>Login</strong>
        </ButtonWithGradient>

        <br /><br />

        <ButtonWithGradient
          text="Save"
          processing={true}
          disabled={true}
        />

        <br /><br />

        <ButtonWithGradient
          text={sidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          onClick={toggleSidebar}
        />

        <b style={{ color: 'red' }}>#############</b>

        </div>
        </>
    );
};
export default NewPge;