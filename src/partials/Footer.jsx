import '../styles/footer.css'

const Footer = () => {
    return (
        <footer>
            <p>© quarters {new Date().getFullYear()}</p>
            <p>help@quarters.com</p>
        </footer>
    )
}

export default Footer