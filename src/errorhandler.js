import {Link} from "react-router-dom";

export default function ErrorHandler(){
    return(
            <div className="four-o-four">
                <img src="/images/000-404.png" alt="error image"/>
                <p className="four-o-four-msg">oops, something went wrong. Go back to <Link to="/">homepage</Link></p>
            </div>
            )
}