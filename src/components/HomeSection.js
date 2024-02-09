export default function HomeSection() {
    return (
        <div className="section home">
            <div className="col">
                <h1 className="title">Welcome!</h1>
                <p className="info">Welcome!
                    You can search and explore many kind of recipes here including their required ingridients and its propreties. Have fun exploring. You can select any of the desire tabs to start exploring.
                    <br></br><br></br>Most Popular:
                    5 Bean Chili Stew Recipe by Mario.
                    <br></br><br></br>This website was created by Amir, Dana, Lital and Michael.
                </p>
                <button className="btn">Explore Now</button>
            </div>
            <div className="col">
                <img classname="custom-img" src="/images/home_img/painted.jpg" alt=""></img>
            </div>
        </div>
    )
}