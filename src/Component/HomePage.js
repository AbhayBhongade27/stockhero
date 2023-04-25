import React, { useState } from "react";
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

import Stacked from "../Asset/Stacked.png";
import Trending from "../Asset/trending 1 copy.png";
import downArrow from "../Asset/baseline_arrow_drop_down_white_48dp.png";
import fakeData from "./fakeData.json";
import "./Css/HomePage.css";
import Chart from "react-apexcharts";

const HomePage = () => {
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
      <div className="homepagecontainer">
        <div className="allboxcontainer">
          <div className="boxcontainer firstboxcontainer">
            <img src={Dashboard} alt="loading" className="imgcommon" />
            <span className="text-white boxcontainerspan">Dashboard</span>
          </div>
          <div className="boxcontainer">
            <img src={Position} alt="loading" className="imgcommon" />
            <span className="text-white boxcontainerspan">Position</span>
          </div>
          <div className="boxcontainer">
            <img src={Battleground} className="imgcommon" alt="loading" />
            <span className="text-white boxcontainerspan">Battleground</span>
          </div>
          <div className="boxcontainer">
            <img src={Referrals} className="imgcommon" alt="loading" />
            <span className="text-white boxcontainerspan">Referrals</span>
          </div>
          <div className="boxcontainer">
            <img src={Dashboard} className="imgcommon" alt="loading" />
            <span className="text-white boxcontainerspan">Analytics</span>
          </div>
          <div className="boxcontainer">
            <img src={Stacked} className="imgcommon" alt="loading" />
            <span className="text-white boxcontainerspan">Trades</span>
          </div>
        </div>
      </div>

      <div>
        <div className="allboxes ml38">
          <div className="box">
            <div className="box2">
              <div className="imgcnt">
                <img src={Trending} className="imgcommon2" alt="loading" />
              </div>
              <div className="textcnt">
                <p className="m-0 boxp text-white">NIFTY 50</p>
                <h5 className="m-0 boxh5 text-white">₹17812.40</h5>
              </div>
            </div>
            <p className="spancnt text-white">
              <span>
                <span className="span1">Today</span>
                <img src={downArrow} className="imgcommon3" alt="loading" />
              </span>
              <span className="rstag">₹90.10</span>{" "}
              <span className="span3">(+0.51%)</span>
            </p>
          </div>

          <div className="box ml19">
            <div className="box2">
              <div className="imgcnt">
                <img src={Trending} className="imgcommon2" alt="loading" />
              </div>
              <div className="textcnt">
                <p className="m-0 boxp text-white">NIFTY 50</p>
                <h5 className="m-0 boxh5 text-white">₹17812.40</h5>
              </div>
            </div>
            <p className="spancnt text-white">
              <span>
                <span className="span1">Today</span>
                <img src={downArrow} className="imgcommon3" alt="loading" />
              </span>
              <span className="rstag">₹90.10</span>{" "}
              <span className="span3">(+0.51%)</span>
            </p>
          </div>

          <div className="box ml19">
            <div className="box2">
              <div className="imgcnt">
                <img src={Trending} className="imgcommon2" alt="loading" />
              </div>
              <div className="textcnt">
                <p className="m-0 boxp text-white">NIFTY 50</p>
                <h5 className="m-0 boxh5 text-white">₹17812.40</h5>
              </div>
            </div>
            <p className="spancnt text-white">
              <span>
                <span className="span1">Today</span>
                <img src={downArrow} className="imgcommon3" alt="loading" />
              </span>
              <span className="rstag">₹90.10</span>{" "}
              <span className="span3">(+0.51%)</span>
            </p>
          </div>

          <div className="box ml19">
            <div className="box2">
              <div className="imgcnt">
                <img src={Trending} className="imgcommon2" alt="loading" />
              </div>
              <div className="textcnt">
                <p className="m-0 boxp text-white">NIFTY 50</p>
                <h5 className="m-0 boxh5 text-white">₹17812.40</h5>
              </div>
            </div>
            <p className="spancnt text-white">
              <span>
                <span className="span1">Today</span>
                <img src={downArrow} className="imgcommon3" alt="loading" />
              </span>
              <span className="rstag">₹90.10</span>{" "}
              <span className="span3">(+0.51%)</span>
            </p>
          </div>
        </div>
        <div className="bxcnt ml38">
          <div className="b1 mt77">
            <div className="btlcnt">
              <span>
                <img
                  src={Award}
                  alt="loading"
                  style={{
                    width: "32px",
                    height: "32px",
                  }}
                />
              </span>
              <span className="Battlegroundhd">Battleground</span>
            </div>
            <div className="mnbx mt16px">
              {" "}
              <div className="coin"></div>
            </div>
          </div>

          <div className="b1 mt77">
            <div className="mnbx mt64">
              {" "}
              <div className="coin"></div>
            </div>
          </div>
          <div className="b1 mt77">
            <div className="viewall">
              <span className="viewallspan">View All</span>
            </div>
            <div className="mnbx">
              {" "}
              <div className="coin"></div>
            </div>
          </div>
          <div className="b2">
            <h6 className="leaderboard">Leaderboard</h6>
            <p className="contestreferrals">
              <span className="Contests">Contests</span>
              <span className="Referrals">Referrals</span>
              <span>Referrals</span>
            </p>
            <div className="mnbx2"></div>
          </div>
        </div>
        <div className="mt-5 ml38">
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
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
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
        <div className="advtisementimgContainer ml38   mt-5">
          <img src={Add2} className="imgadd2" alt="loading" />
          <img src={Add1} className="imgadd2 ms-5" alt="loading" />
        </div>
        <div className="graphContainer ml38 mt-5">
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
      </div>
    </div>
  );
};

export default HomePage;
