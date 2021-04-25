import Filter from "../../../app-components/filter/container/container";

const reviewDashboard = (props) => {

    console.log('review props', props)
    return (<div>
        reviews
        <button onClick={props.getReviews}>clickMe</button>
        <Filter />
    </div>);
}

export default reviewDashboard;