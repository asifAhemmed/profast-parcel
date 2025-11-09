import ProfastLogo from "../../../assets/logo.png";

const Logo = () => {
    return (
        <div className="flex items-end">
            <img className="mb-2" src={ProfastLogo} alt="Profast Logo" />
            <p className="text-3xl ml-2 font-extrabold">Profast</p>
        </div>
    );
};

export default Logo;