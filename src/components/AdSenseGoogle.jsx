import { useEffect } from "react";

const AdSenseComponent = ({ adClient, adSlot }) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error: ", e);
        }
    }, []);

    return (
        <div>
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client={adClient}
                data-ad-slot={adSlot}
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </div>
    );
};

export default AdSenseComponent;
