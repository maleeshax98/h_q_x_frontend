import React from 'react'
import { useNavigate } from 'react-router-dom';

function useLogout() {
    const logout = async () => {
        localStorage.clear();
        window.location.reload();
    }

    return { logout }
}

export default useLogout