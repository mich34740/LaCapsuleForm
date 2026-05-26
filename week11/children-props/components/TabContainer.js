import styles from '../styles/TabContainer.module.css';
import React, { useState } from "react";

function TabContainer({ children }) {
    const tabs = React.Children.toArray(children);
    const [activeTab, setActiveTab] = useState(0);
    
    return (
        <div>
            {/* Titres des onglets */}
            <div className="tabs">
                {tabs.map((tab, index) => (
                    <button key={index} onClick={() => setActiveTab(index)}> {tab.props.title}</button>
                ))}
            </div>

            {/* Contenu de l'onglet actif */}
            <div className="tab-content">
                {tabs[activeTab]}
            </div>
        </div>
    );
}

export default TabContainer;