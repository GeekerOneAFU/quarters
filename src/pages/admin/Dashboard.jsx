import { useAuth } from "../../context/AuthProvider"

const Dashboard = () => {

    const { user, logout } = useAuth()
    console.log(user);

    return (
        <div style={DashboardStyles}>
            <h1 style={H1}>Welcome <span style={H1_Span}>{user?.username}!</span></h1>
            <button style={Button} onClick={logout}>Logout</button>
        </div>
    )
}

const DashboardStyles = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '0',
    padding: '100px',
    gap: '20px',
    background: 'linear-gradient(45deg, #afe8ffa4, #ffc3a0a6, #b4fdb19f, #cfebfea2, #f8ea9baf, #ffdabcb2)',
    backgroundSize: '400% 400%',
    boxSizing: 'border-box'
}

const H1 = {
    color: 'black',
    fontSize: '24px',
    margin: '0',
    padding: '0'
}

const H1_Span = {
    color: 'black',
    fontSize: '18px',
    margin: '0',
    padding: '0'
}

const Button = {
    width: 'fit-content',
    height: 'auto',
    padding: '7px 15px',
    margin: '10px 0 0 0',
    border: 'none',
    outline: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '10px',
    borderRadius: '5px',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: 'rgb(199, 34, 34)',
    boxSizing: 'border-box'
}

export default Dashboard