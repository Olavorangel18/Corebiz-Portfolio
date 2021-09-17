function Post(props){
    return (
            <a target="_blank" rel="noreferrer" className="post" href={props.url} style={{backgroundImage:props.background}}>
            <h3 className="title">{props.title}</h3>
            </a>
    );
}

export default Post;