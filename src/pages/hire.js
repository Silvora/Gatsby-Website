import React from 'react'

import Layout from '../layout/layout'

// import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"

export default function hire() {
    return (
        <Layout title="Hire" description="Hire">
            <section id="pageid" style={{ padding: "80px 0" }}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div id="contactform">
                            {/* <!-- Replace the e-mail address --> */}
                            <form
                                method="POST">
                                <input type="text" name="name" placeholder="Your Name" required />
                                <input type="email" name="_replyto" placeholder="Your E-mail Address" required />
                                <textarea name="message" rows="7" placeholder="Type your Message" required></textarea>

                                <input className="btn" type="button" value="Send" />
                                {/* <input type="text" name="name" placeholder="Your Name" required />
                                <input type="email" name="_replyto" placeholder="Your E-mail Address" required />
                                <textarea name="message" rows="7" placeholder="Type your Message" required></textarea>
                               
                                <input type="hidden" name="_subject" value="New message via Aries!" />
                                <input type="text" name="_gotcha" style="display:none" />
                               
                                <input type="hidden" name="_next" value="#" />
                                <input class="btn" type="submit" value="Send" /> */}
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </Layout>
    )
}
