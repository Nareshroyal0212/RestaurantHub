import "../../styles/pageTitle.css";

function PageTitle({

    title,

    subtitle

}){

    return(

        <section className="page-title">

            <h1>

                {title}

            </h1>

            <p>

                {subtitle}

            </p>

        </section>

    );

}

export default PageTitle;