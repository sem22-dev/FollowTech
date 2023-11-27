import Image from "next/image";

export default function Bird(){
    return(
        <div className="coin ">
            <div className="side heads">
                <Image src={"/images/bird4.png"} alt={""} width={1000} height={1000}/>
            </div>
            <div className="side tails">
            <Image src={"/images/bird4.png"} alt={""} width={1000} height={1000}/>
            </div>
        </div>
    )
}