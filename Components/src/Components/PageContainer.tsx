import React from 'react';
import './PageContainer.css';

export interface PageContainerProps {
  children: React.ReactNode;
  sidebarCollapsed: boolean;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  sidebarCollapsed,
  className = '',
}) => {
  const combinedClassName = [
    'page-container',
    sidebarCollapsed && 'collapsed',
    className
  ].filter(Boolean).join(' ');

  return (
    <main role="main" className={combinedClassName}>
      {children}
    </main>
  );
};

export default PageContainer;
