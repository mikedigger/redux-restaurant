
import { useContext } from 'react';
import RestaurantServiceContext from '../RestaurantServiceContext';

const withRestaurantService = () => (Target) => (props) => {
    const value = useContext(RestaurantServiceContext);
    return (
        <Target
            restaurantService={value}
            {...props} />
    )
}

export default withRestaurantService;
