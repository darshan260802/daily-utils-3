import axios from "axios";


export const shortLink = async(long:string) => {
    const apiKey = "c73678fa73c8679f2d5c87a751c7f2c76a2e0";
    const url = `https://cutt.ly/api/api.php?key=${apiKey}&short=${long}`;
    await axios.get(url).then((res:any) => console.log(res.data)).catch((err:any) => console.error(err))
}