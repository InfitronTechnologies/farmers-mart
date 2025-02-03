import React, { useEffect } from "react";
import { useProfile } from "../../ProfileContext/ProfileContext";
import axios from "axios";

const Wallet = () => {
    const {userId, userToken} = useProfile()

    useEffect(() => {
        const getWallet = async () => {
            const walletUrl = process.env.NODE_ENV === "production"
            ? `https://ourservicestech.com.ng/farmmart_api/v2/wallet/select_wallet_by_user_id?users_id=${userId}&users_token=${userToken}`
            : `/farmmart_api/v2/wallet/select_wallet_by_user_id?users_id=${userId}&users_token=${userToken}`;

            console.log(walletUrl)
            const response = await axios.get(walletUrl)
            console.log(response)
        }
        getWallet()
    },[])

    return(
        <div>
            Tired
        </div>
    )
}

export default Wallet