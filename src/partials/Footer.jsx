import '../styles/footer.css'

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>© quarters {new Date().getFullYear()}</p>
            <Link className="link" to="/signup">Signup</Link>
            <Link className="link" to="/verify">Verification</Link>
            <Link className="link" to="/welcome">Welcome</Link>
            <p>help@quarters.com</p>
        </footer>
    )
}

export default Footer