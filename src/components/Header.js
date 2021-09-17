function Header(props) {
    return (
        <header>
            <div className="background"></div>
            <img className = "picture" src="https://media-exp1.licdn.com/dms/image/C4D03AQGdSlu7C7P7vg/profile-displayphoto-shrink_200_200/0/1596307460797?e=1637193600&v=beta&t=XAqIBdv4CPPa7VpyzhxXdkQvtpNj27e_ityepwihaoM" alt="Olavo Rangel profile"></img>
            <h1 className="name">{props.name}</h1>
            <h2 className="description">{props.description}</h2>
        </header>
    );
  }
  
  export default Header;