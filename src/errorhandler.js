import {Link} from "react-router-dom";

export default function ErrorHandler(){
    return(
            <>
                <img src="/images/000-404.png" className="four-o-four" alt="error image"/>
                <p className="four-o-four-msg">oops, something went wrong. Go back to <Link to="/">homepage</Link></p>
            </>
            )
}