import Head from "next/head";

const Meta = ({title,keywords,description}) =>{
    return (
        <Head>
            {/* <meta name='viewport' content='width=device-width,initial-scale=1'/> */}
            <meta name='keywords' content={keywords}/>
            <meta charSet="utf-8"/>
            <meta name="discription" content={description}/>
            <meta name="author" content="Otabek Akbarov"/>
            <meta name="google-site-verification" content="sVrLuqrlFT3Yu4CSTu9hp3GUtbqEX0daT-D-znXpnvc" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Portfolio Website',
    keywords: 'otabekakbaroff.com, otabek akbarov, full stack web developer, portfolio, html,css,sass,react,nextjs,node,express,nestjs',
    description: 'Personal web developer portfolio'
}





export default Meta



