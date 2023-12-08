function New(props) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
};

function Popular(props) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
};

function Article(props) {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};

function Video(props) {
    return (
        <div className="item item-video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};


function userDataDecorator(Component, props) {
        const isPopular = props.views > 100 ? true : false;
        return isPopular ?
            <Popular>
                <Component {...props} />;
            </Popular> : <New>
                <Component {...props} />;
            </New>

};



const ComponentWithWrapper =  (props) => {
     return props.type === 'video' ? userDataDecorator(Video, props) : userDataDecorator(Article, props)
}
export default ComponentWithWrapper;