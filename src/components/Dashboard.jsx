import React from "react";
import ToDoList from "./ToDoList";
import Header from "./Header";

import styles from "@/styles/dashboard.module.css";

function Dashboard() {
  return (
    <>
      <Header />
      <div className={styles.listContainer}>
        <ToDoList />
      </div>
    </>
  );
}

export default Dashboard;
