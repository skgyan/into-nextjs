const DocsPage = ({params}) => {
    console.log(params);
    return <div>Docs page {params.id}</div>
}

export default DocsPage;

// for multiple params support add another dynamic folder under [id] 