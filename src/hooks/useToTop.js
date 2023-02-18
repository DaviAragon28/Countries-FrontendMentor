import React, { useEffect, useState } from "react";

export const useToTop = () => {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const newShowButton = window.scrollY > 100;
            showButton !== newShowButton && setShowButton(newShowButton)
        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showButton])

    return { showButton }

}