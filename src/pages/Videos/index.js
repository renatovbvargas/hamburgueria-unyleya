import './styles.css';

const Videos = () => {
    return (
        <main className='container-page container-news'>
            <section className='main-section'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/oOpM6GL1Cbg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <section className='secundary-section'>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8beZ3zq02k8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Nf_wLi5_BqA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/knHJxevkCgk?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/20UL2ZNDPl8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>


        </main>
    )
}

export default Videos;