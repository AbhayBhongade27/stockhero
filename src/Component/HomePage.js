import React, { useState, useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Dashboard from "../Asset/Grid.png";
import Analytics from "../Asset/Grid.png";
import Referrals from "../Asset/outline_groups_white_48dp.png";
import Battleground from "../Asset/outline_emoji_events_white_48dp.png";
import Position from "../Asset/Doc.png";
import Award from "../Asset/Rectangle 40966.png";
import Add1 from "../Asset/add1.png";
import Add2 from "../Asset/add2.png";
import { NavLink } from "react-router-dom";
import Stacked from "../Asset/Stacked.png";
import Trending from "../Asset/trending 1 copy.png";
import downArrow from "../Asset/baseline_arrow_drop_down_white_48dp.png";
import fakeData from "./fakeData.json";
import "./Css/HomePage.css";
import Chart from "react-apexcharts";

const HomePage = () => {
  const [activeLink, setActiveLink] = useState("");
  const observerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Contests");
  const [activeBox, setActiveBox] = useState("");
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveBox(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const targetIds = [
      "dashboard",
      "position",
      "battleground",
      "referrals",
      "analytics",
      "trades",
    ];

    targetIds.forEach((id) => {
      const target = document.querySelector(`#${id}`);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      targetIds.forEach((id) => {
        const target = document.querySelector(`#${id}`);
        if (target) {
          observer.unobserve(target);
        }
      });
    };
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  //battleground boxes
  const boxes = [
    {
      title: "Battleground",
      icon: Award,
      marginTop: "77px",
      coin: true,
    },
    {
      title: "",
      icon: null,
      marginTop: "11rem",
      coin: true,
    },
    {
      title: "View All",
      icon: null,
      marginTop: "77px",
      coin: true,
    },
  ];
  //dummy json data
  const dummyData = [
    {
      id: 1,
      imgSrc: Trending,
      title: "NIFTY 50",
      price: "₹17812.40",
      today: "Today",
      arrowSrc: downArrow,
      tag: "₹90.10",
      percent: "(+0.51%)",
    },
    {
      id: 2,
      imgSrc: Trending,
      title: "NIFTY 50",
      price: "₹17812.40",
      today: "Today",
      arrowSrc: downArrow,
      tag: "₹90.10",
      percent: "(+0.51%)",
    },
    {
      id: 3,
      imgSrc: Trending,
      title: "NIFTY 50",
      price: "₹17812.40",
      today: "Today",
      arrowSrc: downArrow,
      tag: "₹90.10",
      percent: "(+0.51%)",
    },
    {
      id: 4,
      imgSrc: Trending,
      title: "NIFTY 50",
      price: "₹17812.40",
      today: "Today",
      arrowSrc: downArrow,
      tag: "₹90.10",
      percent: "(+0.51%)",
    },
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#161717",
      color: theme.palette.common.white,
      borderBottom: "0",
    },
    [`&.${tableCellClasses.body}`]: {
      backgroundColor: "#0D0D0D",
      color: theme.palette.common.white,
      fontSize: 14,
      borderBottom: "0",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, Qty, AvgPrice, LTP, GrossPl, netpl) {
    return { name, Qty, AvgPrice, LTP, GrossPl, netpl };
  }

  const rows = [
    createData("NIFTY2341316250PE", -50, 1534.86, 1534.86, 1534.86, -11.92),
    createData("NIFTY2341316250PE", -50, 1534.86, 1534.86, 1534.86, -11.92),
    createData("NIFTY2341316250PE", -50, 1534.86, 1534.86, 1534.86, -11.92),
    createData("NIFTY2341316250PE", -50, 1534.86, 1534.86, 1534.86, -11.92),
    createData("NIFTY2341316250PE", -50, 1534.86, 1534.86, 1534.86, -11.92),
    createData("NIFTY2341316250PE", -50, 1534.86, 1534.86, 1534.86, -11.92),
  ];
  const [data, setData] = useState(fakeData);
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
        background: {
          // use the linear gradient background here
          gradient: {
            type: "vertical",
            stops: [
              {
                offset: -9.77,
                color: "#6866FF",
                opacity: 0.1,
              },
              {
                offset: 123.45,
                color: "#6866FF",
                opacity: 0.01,
              },
            ],
          },
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisTicks: {
          show: true,
          color: "#ffffff",
          width: "1px",
        },
        axisBorder: {
          show: true,
          color: "#ffffff",
          offsetX: 0,
          offsetY: 0,
          width: "1px",
        },
      },
      yaxis: {
        axisBorder: {
          show: true,
          color: "#ffffff",
          offsetX: 0,
          offsetY: 0,
          width: "1px",
        },
      },
      grid: {
        show: false,
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 100, 120],
      },
    ],
  });

  return (
    <div className="boxstudio">
      {/* --------------------sidenavbar starthere------------------------------------------ */}
      <nav>
        <div className="homepagecontainer">
          <div className="allboxcontainer">
            <a
              href="#dashboard"
              className={`sidebar-link sidebar-link-dashboard ${
                activeLink === "dashboard" ? "active" : ""
              }`}
            >
              <div className="boxcontainer firstboxcontainer">
                <img src={Dashboard} alt="loading" className="imgcommon" />
                <span className="text-white boxcontainerspan">Dashboard</span>
              </div>
            </a>

            <a
              href="#position"
              className={`sidebar-link sidebar-link-position ${
                activeLink === "position" ? "active" : ""
              }`}
            >
              <div className="boxcontainer">
                <img src={Position} alt="loading" className="imgcommon" />
                <span className="text-white boxcontainerspan">Position</span>
              </div>
            </a>
            <a
              href="#battleground"
              className={`sidebar-link sidebar-link-battleground ${
                activeLink === "battleground" ? "active" : ""
              }`}
            >
              <div className="boxcontainer">
                <img src={Battleground} className="imgcommon" alt="loading" />
                <span className="text-white boxcontainerspan">
                  Battleground
                </span>
              </div>
            </a>
            <a
              href="#referrals"
              className={`sidebar-link sidebar-link-referrals ${
                activeLink === "referrals" ? "active" : ""
              }`}
            >
              <div className="boxcontainer">
                <img src={Referrals} className="imgcommon" alt="loading" />
                <span className="text-white boxcontainerspan">Referrals</span>
              </div>
            </a>

            <a
              href="#analytics"
              className={`sidebar-link sidebar-link-analytics ${
                activeLink === "analytics" ? "active" : ""
              }`}
            >
              <div className="boxcontainer">
                <img src={Dashboard} className="imgcommon" alt="loading" />
                <span className="text-white boxcontainerspan">Analytics</span>
              </div>
            </a>

            <a
              href="#trades"
              className={`sidebar-link sidebar-link-trades ${
                activeLink === "trades" ? "active" : ""
              }`}
            >
              <div className="boxcontainer">
                <img src={Stacked} className="imgcommon" alt="loading" />
                <span className="text-white boxcontainerspan">Trades</span>
              </div>
            </a>
          </div>
        </div>
      </nav>
      {/* --------------------sidenavbar end here------------------------------------------ */}
      {/* --------------------dashboard starthere------------------------------------------ */}
      <div>
        <div className="allboxes ml38 section" id="dashboard">
          {dummyData.map((item, index) => (
            <div className={"box" + (index === 0 ? "" : " ml19")} key={item.id}>
              <div className="box2">
                <div className="imgcnt">
                  <img src={item.imgSrc} className="imgcommon2" alt="loading" />
                </div>
                <div className="textcnt">
                  <p className="m-0 boxp text-white">{item.title}</p>
                  <h5 className="m-0 boxh5 text-white">{item.price}</h5>
                </div>
              </div>
              <p className="spancnt text-white">
                <span>
                  <span className="span1">{item.today}</span>
                  <img
                    src={item.arrowSrc}
                    className="imgcommon3"
                    alt="loading"
                  />
                </span>
                <span className="rstag">{item.tag}</span>{" "}
                <span className="span3">{item.percent}</span>
              </p>
            </div>
          ))}
        </div>

        {/* --------------------dashboard end here------------------------------------------ */}
        {/* --------------------battelground starthere------------------------------------------ */}
        <div className="bxcnt ml38 section" id="battleground">
          {boxes.map((box, index) => (
            <div
              className="b1"
              key={index}
              style={{ marginTop: box.marginTop }}
            >
              {box.title && (
                <div className="btlcnt">
                  <span
                    className="Battlegroundhd"
                    style={
                      box.title === "View All"
                        ? {
                            color: "#6842FF",
                            fontSize: "16px",
                            marginTop: "27px",
                            marginLeft: "15rem",
                          }
                        : {}
                    }
                  >
                    {box.title}
                  </span>
                </div>
              )}
              <div className="mnbx mt16px">
                {box.coin && <div className="coin"></div>}
              </div>
            </div>
          ))}

          <div className="b2">
            <h6 className="leaderboard">Leaderboard</h6>
            <p className="contestreferrals">
              <span
                className={`Contests ${
                  activeTab === "Contests" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Contests")}
              >
                Contests
              </span>
              <span
                className={`Referrals ${
                  activeTab === "Referrals" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Referrals")}
              >
                Referrals
              </span>
              <span
                className={`Board ${activeTab === "Board" ? "active" : ""}`}
                onClick={() => handleTabClick("Board")}
              >
                Board
              </span>
            </p>
            <div className="mnbx2 px-3">
              {activeTab === "Contests" && <p>Contests related data</p>}
              {activeTab === "Referrals" && <p>Referrals related data</p>}
              {activeTab === "Board" && <p>Board related data</p>}
            </div>
          </div>
        </div>
        {/* --------------------battelground section end here------------------------------------------ */}
        {/* --------------------position section start here------------------------------------------ */}

        <div className="mt-5 ml38 section" id="position">
          <div className="mypostion">
            <div className="h3cnt">
              <h3 className="myh3tag">My Position</h3>{" "}
              <p className="openparagraph mb-0">(Open P: 2 | Close P: 0)</p>
            </div>
            <div>
              <button type="button" className="btn btn-instrument">
                + Add instrument
              </button>
            </div>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Instrument</StyledTableCell>
                  <StyledTableCell>Qty</StyledTableCell>
                  <StyledTableCell>Avg. Price</StyledTableCell>
                  <StyledTableCell>LTP</StyledTableCell>
                  <StyledTableCell>Gross P&L</StyledTableCell>
                  <StyledTableCell>Net P&L</StyledTableCell>
                  <StyledTableCell>Change%</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell className="cmnclr">
                      {row.Qty}
                    </StyledTableCell>
                    <StyledTableCell className="cmncellclr">
                      ₹{row.AvgPrice}
                    </StyledTableCell>
                    <StyledTableCell className="cmncellclr">
                      ₹{row.LTP}
                    </StyledTableCell>
                    <StyledTableCell className="cmnclr">
                      ₹{row.GrossPl}
                    </StyledTableCell>
                    <StyledTableCell className="cmnclr">
                      ₹{row.netpl}
                    </StyledTableCell>
                    <StyledTableCell className="cmnclr">
                      {row.netpl}%
                    </StyledTableCell>
                    <StyledTableCell>
                      {" "}
                      <button type="button" className="btn btn-exit">
                        Exit
                      </button>{" "}
                      <button type="button" className="btn btn-buy mx-1">
                        Buy
                      </button>{" "}
                      <button type="button" className="btn btn-sell">
                        Sell
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="btncnt">
            <button type="button" className="btn btn-Running ms-5">
              Running Lots: 849.1
            </button>{" "}
            <button type="button" className="btn btn-Brokerage mx-5">
              Brokerage: ₹133.63
            </button>{" "}
            <button type="button" className="btn btn-Gross">
              Gross P&L: +₹45.13
            </button>{" "}
            <button type="button" className="btn btn-Gross mx-5">
              Net P&L: +₹45.13
            </button>
          </div>
        </div>
        {/* --------------------position section end here------------------------------------------ */}
        {/* --------------------analytics section start here------------------------------------------ */}

        <div
          className="advtisementimgContainer ml38 section  mt-5"
          id="referrals"
        >
          <img src={Add2} className="imgadd2" alt="loading" />
          <img src={Add1} className="imgadd2 ms-5" alt="loading" />
        </div>
        {/* --------------------graph section start here------------------------------------------ */}
        <div className="graphContainer ml38 mt-5 section" id="analytics ">
          <div className="graphheading ps-5 pe-5">
            <span className="netspan">Net P&L chart</span>
            <div className="dropdown">
              <button
                className="btn btn-dropdown dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Daily
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Weekly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Monthly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Yearly
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="chartcontainer">
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="area"
              width="1248"
              height="480"
            />
          </div>
        </div>
        {/* --------------------graph section end here------------------------------------------ */}
      </div>
    </div>
  );
};

export default HomePage;
