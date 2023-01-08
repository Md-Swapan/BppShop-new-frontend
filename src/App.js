import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
            {/* <Route
              path="/"
              element={
                <PrivateRoute>
                  <AgentPanelHome />
                </PrivateRoute>
              }
            >
              <Route index element={<Dashboard />}></Route>
              <Route path="view-profile" element={<ViewProfile />}></Route>
              <Route
                path="update-agent-profile"
                element={<UpdateAgent />}
              ></Route>

              <Route path="customer" element={<Customer />}>
                <Route path="customer-list" element={<CustomerList />}></Route>
                <Route
                  path="customer-details/:id"
                  element={<CustomerDetails />}
                ></Route>
                <Route path="add-customer" element={<AddCustomer />}></Route>
              </Route>
              <Route path="order-history" element={<OrderHistory />}>
                <Route index element={<OrderHistoryHome />}></Route>
                <Route
                  path="order-details/:id"
                  element={<SeeOrderDetails />}
                ></Route>
                <Route path="order-bills" element={<OrderBills />}></Route>
              </Route>
              <Route path="commission" element={<MyCommission />}>
                <Route path="pending" element={<PendingCommission />} />
                <Route
                  path="commission-history"
                  element={<CommissionHistory />}
                />
              </Route>
              <Route path="wallet" element={<Wallet />}></Route>
            </Route> */}
          {/* <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Navigate replace to="/login" />} /> */}
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
    </div>
  );
}

export default App;
