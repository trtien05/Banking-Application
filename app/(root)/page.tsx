import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBanlanceBox from '@/components/TotalBanlanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {
    firstName: 'Adrian',
    lastName: 'JSM',
    email: 'contact@jsmastery.pro'
  }
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and trasactions efficiently."
          />
          <TotalBanlanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12550.50}
          />
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50 }, { currentBalance: 500.50 }]}

      />

    </section>
  )
}

export default Home