import {useEffect} from "react";

export default function NowPlaying() {
    const queryParams = new URLSearchParams(window.location.search)
    const code = queryParams.get('code');
    const link = `https://t.me/dmhd6219_nowplaying_bot?start=${code}`;

    useEffect(() => {
        window.location.replace(link);
    }, [link])

    return (
        <div>You will be redirected to Telegram bot now...
            If it doesn't happen, press <a href={link}>this link</a> manually
        </div>
    )
}