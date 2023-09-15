import "./single.scss";
import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
import Chart from '../../components/chart';
import List from '../../components/table/List';

const Single = () => {
    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img 
                                src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/306651985_3414993602158402_4689023137001599085_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=M9SyFLWmpUkAX8bsVkE&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBdiaA-OTeE-BRhuMPioZJ2zrq8t_ba0ifLsiSc-wOnyQ&oe=6503A201" 
                                alt="" 
                                className="itemImg" 
                            />
                            <div className="details">
                                <h1 className="itemTitle">Phuong Trinh</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">trinhttr@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+1 2315 32151 </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Elton St.234 Garden Yd. NewYork</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending (Last 6 Month)"/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List/>
                </div>
            </div>

        </div>
    )
}

export default Single