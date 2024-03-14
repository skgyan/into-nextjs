const DocsPage = ({params}) => {
    console.log(params);    
    return <div className="ml-1 text-black">Docs page {params.id}</div>
}

export default DocsPage;

// for multiple params support add another dynamic folder under [id] 