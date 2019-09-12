import React from 'react'


const DisplayImage = () => (
<div id="wrapper">


    <div id="main">
        <div class="inner">


                <header id="header">
                    <a href="https://nusiseclub.com" class="logo"><strong>NUS ISE Club</strong> </a>
                    <ul class="icons">
                        <li><a href="https://www.instagram.com/nus_ise/" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                        <li><a href="https://www.facebook.com/pg/NUSISEClub/" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                        <li><a href="https://www.linkedin.com/company/14617038/" class="icon brands style2 fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
                        <li><a href="mailto:club.ise.nus@gmail.com" class="icon style2 fa-envelope" target="_blank"><span class="label">Email</span></a></li>
                    </ul>
                </header>


                <section>
                    <header class="main">
                        <h1>About Us</h1>
                    </header>

                    <span class="image main"><img src={"../src/images/iseclublogobanner.png"} alt="" /></span>
                    <hr class="major" />

                    <h2>NUS ISE Club</h2>
                    <p>NUS Industrial and Systems Engineering (ISE) Club of National University of Singapore is an affiliated club of the NUS Students’ Engineering Club and is the official club that represents the undergraduate body of Industrial and Systems Engineering.</p>
                    <p>It is a student run organisation that seeks to improve the student life and welfare of every undergraduate student in the Department. </p>
                    <p>Founded in 2002, ISE Club aims to instil a sense of belonging within the ISE community through various events held throughout each academic year focusing on both the welfare and academic aspect of the undergraduate community. </p>
                    <p>The club is currently managed by the 18th Management Committee.</p>


                    <hr class="major" />

                </section>

        </div>
    </div>							


    <div id="sidebar">
        <div class="inner">


                <section id="search" class="alt">
                    <form method="post" action="#">
                        <input type="text" name="query" id="query" placeholder="Search" />
                    </form>
                </section>

                <nav id="menu">
                    <header class="major">
                        <h2>Menu</h2>
                    </header>
                    <ul>
                        <li><a href="https://nusiseclub.com">Home</a></li>
                        <li><a href="https://nusiseclub.com/aboutus">About Us</a></li>
                        <li><a href="https://nusiseclub.com/18mc">18th Management Committee</a></li>
                        <li>
                            <span class="opener">Events</span>
                            <ul>
                                <li><a href="https://nusiseclub.com/isefoc">ISE Freshman Orientation Camp</a></li>
                                <li><a href="https://nusiseclub.com/iseday">ISE Day</a></li>
                                <li><a href="https://nusiseclub.com/isenightcycling">ISE Night Cycling</a></li>
                                <li><a href="https://nusiseclub.com/welfare">Welfare Giveaways</a></li>
                                <li><a href="https://nusiseclub.com/cip">Community Involvement Projects</a></li>
                                <li><a href="https://nusiseclub.com/careertalk">ISE Industry and Career Talk</a></li>
                                <li><a href="https://nusiseclub.com/nusisebacc">NUS ISE Business Analytics Case Competition</a></li>
                            </ul>
                        </li>
                        <li><a href="https://nusiseclub.com/shop">Merchandise</a></li>
                        <li><a href="https://nusiseclub.com/sponsorships">Sponsorships</a></li>
                        <li><a href="https://nusiseclub.com/contactus">Contact Us</a></li>

                    </ul>
                </nav>

                <section>
                    <header class="major">
                        <h2>Upcoming Events</h2>
                    </header>
                    <div class="mini-posts">
                        <article>
                            <a href="#" class="image"><img src="../src/images/pic07.jpg" alt="" /></a>
                            <p>ISE Day is here soon! Click <a href="https://nusiseclub.com/iseday">here</a> to find out more.</p>
                        </article>
                        <article>
                            <a href="#" class="image"><img src="../src/images/pic08.jpg" alt="" /></a>
                            <p>Ready for a night of fun and laughter? Learn more about Night Cycling <a href="https://nusiseclub.com/isenightcycling">here</a>.</p>
                        </article>
                        <article>
                            <a href="#" class="image"><img src="../src/images/pic09.jpg" alt="" /></a>
                            <p>ISE Shirt Sales have started! Click <a href="https://nusiseclub.com/shop">here</a> to shop now</p>
                        </article>
                    </div>
                    <ul class="actions">
                        <li><a href="#" class="button">More</a></li>
                    </ul>
                </section>


                <section>
                    <header class="major">
                        <h2>Get in touch</h2>
                    </header>
                    <p>Queries? Feedback? Feel free to reach out to us here! Or you can DM us on Instagram ;)</p>
                    <ul class="contact">
                        <li class="icon solid fa-envelope"><a href="mailto:club.ise.nus@gmail.com">club.ise.nus@gmail.com</a></li>
                        <li class="icon solid fa-home">1 Engineering Drive 2, Blk E1A #06-25 <br />
                        Singapore 117576</li>
                    </ul>
                </section>


                <footer id="footer">
                    <p class="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                </footer>

        </div>
    </div>

</div>
)

export default DisplayImage
