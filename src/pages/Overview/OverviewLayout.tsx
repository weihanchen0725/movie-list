/* eslint-disable @typescript-eslint/no-explicit-any */
import { LayoutProps } from '../Discovery/DiscoveryLayout';


const OverviewLayout: React.FC<LayoutProps> = ({children}) => {

    return (
        <div className="Overview">
            {children}
        </div>
    )
}
export default OverviewLayout;