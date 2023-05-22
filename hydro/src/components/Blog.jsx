function Blog (){
    return(
        <>
        <main className="container">
            <section className="ourblog ">
                <h2>OUR BLOG</h2>
                <div className=" gallery flex">
                    <div className="flex25">
                    <article className="pic1  ">
                        <img src="https://plus.unsplash.com/premium_photo-1672436879873-25ccc4c35d2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZmZlZSUyMG11Z3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="coffee" />
                        <h3>Why do we do this</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa repellat, pariatur ad qui blanditiis enim accusantium vel minus debitis nulla minima. Ea doloremque sed quo dolor cum minus voluptatibus?</p>
                        <button className="btn">Read More</button>
                    </article>

                    </div>
                    <div className=" flex25">
                    <article className="pic2">
                        <img src="https://images.unsplash.com/photo-1682685797660-3d847763208e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="coffee" />
                        <h3>Where does it come from</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa repellat, pariatur ad qui blanditiis enim accusantium vel minus debitis nulla minima. Ea doloremque sed quo dolor cum minus voluptatibus?</p>
                        <button className="btn">Read More</button>
                    </article>

                    </div>
                    <div>
                    <article className="pic3 flex25">
                        <img src="https://images.unsplash.com/photo-1683380381470-8bb7e42aa5b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="coffee" />
                        <h3>Where can i get them</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa repellat, pariatur ad qui blanditiis enim accusantium vel minus debitis nulla minima. Ea doloremque sed quo dolor cum minus voluptatibus?</p>
                        <button className="btn">Read More</button>
                    </article>

                    </div>
                </div>
                
            </section>
        </main>
        
        </>

    )
}
export default Blog