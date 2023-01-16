import { useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";
import styles from '../styles/DashboardComponent.module.scss'

export default function Dashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Vasya' },
    { id: 2, name: 'Petya' }
  ]

  )
  const router = useRouter();
  return (
    <>
      <Header />
      <LeftBar>
        <div className={styles.mainWrapDashboard}>
          <h1>ДАШБОРД</h1>
          <ul>
            {users.map(user =>
              <li key={user.id}>
                {user.name}
              </li>
            )}
          </ul>
        </div>
      </LeftBar>
    </>
  )
}