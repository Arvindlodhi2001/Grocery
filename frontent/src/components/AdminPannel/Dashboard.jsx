import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <nav className="sidebar">
        <h3 className="logo">Datta Able</h3>
        <ul>
          <li className="active">Dashboard</li>
          <li>Components</li>
          <li>Table</li>
          <li>Chart</li>
          <li>Maps</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <h2>Dashboard</h2>
        </header>

        {/* Cards Section */}
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5>Daily Sales</h5>
                <h2>$249.95</h2>
                <span className="text-success">↑ 67%</span>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5>Monthly Sales</h5>
                <h2>$2,942.32</h2>
                <span className="text-warning">↓ 36%</span>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5>Yearly Sales</h5>
                <h2>$8,638.32</h2>
                <span className="text-success">↑ 80%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Users Table */}
        <div className="card mt-4">
          <div className="card-body">
            <h5>Recent Users</h5>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Isabella Christensen</td>
                  <td>11 May 12:56</td>
                  <td>
                    <button className="btn btn-success btn-sm">Approve</button>
                  </td>
                </tr>
                <tr>
                  <td>Mathilde Andersen</td>
                  <td>11 May 10:35</td>
                  <td>
                    <button className="btn btn-danger btn-sm">Reject</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
