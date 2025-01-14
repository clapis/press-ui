import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function usePayments() {

    const { getToken } = useKindeAuth();

    const URL = `${import.meta.env.VITE_API_URL}/payments`;

    const pricing = () => {
        return getToken!()
            .then(token => fetch(URL + '/pricing', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }))
            .then(res => res.text())

    };

    const portal = () => {
        return getToken!()
            .then(token => fetch(URL + '/portal', {
                method: 'POST',
                body: JSON.stringify(alert),
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }))
            .then(res => res.text())
    };


    return { pricing, portal }
}