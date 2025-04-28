import styles from "../assets/styles/contact.module.css";

export default function Contact(){

    function handleSubmit(e){
        e.preventDefault();
        console.log(e)
    }
    return(
        <>

                <div className={styles.container}>

                    <form className={styles.contact_form} onSubmit={handleSubmit} target="_self">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name"></input>
                        {/*<label htmlFor="lastName">Last name:</label>*/}
                        {/*<input type="text" id="lastName" name="lastname" placeholder="Last name"></input>*/}
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email address"></input>
                        <label htmlFor="message">Enter you enquiry:</label>
                        <textarea id="message" name="message" placeholder="Enter your enquiry" rows="15"></textarea>
                        <br/>

                        <button type="submit">Submit</button>
                    </form>
                </div>

        </>
    )
}

