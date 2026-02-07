const Header = ({ title, subTitle }) => {
    return (
        <div>
            <h1 className="text-8xl text-red-800/80">{title}</h1>
            <span className="text-4xl">{subTitle}</span>
        </div>
    )
}



export default Header;
