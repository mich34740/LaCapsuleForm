import styles from '../styles/Layout.module.css';
import React from "react";

function Layout({ children, isSidebarVisible }) {
    const sidebar = children.find(
        (child) => child.props.slot === "sidebar"
    );

    const content = children.find(
        (child) => child.props.slot === "content"
    );

    return (
        <div className={styles.layout}>
            {isSidebarVisible && <div className={styles.sidebar}>
                {sidebar}
            </div>}

            <div className={styles.content}>
                {content}
            </div>
        </div>
  );
}

export default Layout;