import "./home.scss";
import Sidebar from "../../components/sidebar"
import Navbar from "../../components/navbar";
import Widget from "../../components/widget";
import Featured from "../../components/featured";
import Chart from "../../components/chart";
import List from "../../components/table/List";

const Home = ({ setDark }) => {
    return (
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="product"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                </div>
                <div className="charts">
                    <Featured />
                    <Chart aspect={2 / 1} title= "Last 6 Months (Revenue)" />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <List/>
                </div>
            </div>
        </div>
    )
}

export default Home;