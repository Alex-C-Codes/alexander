import React from "react";
import Homepage from "./pages/Homepage";
import Content from './pages/Content';
import TeamProfiles from './pages/TeamProfiles';

export default function PagesContainer() {
    return (
        <div>
            <Homepage />
            <Content />
            <TeamProfiles />
        </div>
    )
}