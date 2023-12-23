import React from 'react'
import { Route, Routes } from "react-router-dom"

function routes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    )
}

export default routes
