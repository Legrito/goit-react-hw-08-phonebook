import { Button, Nav } from "react-bootstrap";
import phone from '../data/contacts.png'

const HomeView = () => {
    return (
    <>
    <div className="cta">
    <h1 className="view__title"> Hey! </h1>
    <p className="description"> Check out your personal contacts' storage available from any device 😃</p>
    </div>
    <img
        src={phone}
        alt="Phone"
        className="main__image"
        />
    </>
)}

export default HomeView;