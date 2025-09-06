import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Room = () => {
    const [searchparams, setsearchparams] = useSearchParams();
    const name = searchparams.get('name');

    useEffect(() => {

    }, [name])

    return <div>
        hi {name}
    </div>
}

export default Room;