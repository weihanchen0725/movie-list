/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'
import './DiscoveryLayout.scss'

interface LayoutProps {
    children: ReactNode
}

const DiscoveryLayout: React.FC<LayoutProps> = ({children}) => {

    return (
        <div className="Discovery">
            {children}
        </div>
    )
}
export default DiscoveryLayout;