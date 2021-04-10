const reviewDashboard = (props) => {

    console.log("mayank", props);

    return (<div>
        reviews
        <button onClick = {props.getReviews}>clickMe</button>
    </div>);
}

export default reviewDashboard;