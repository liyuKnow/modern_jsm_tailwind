import React from 'react'
import styles from './styles'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className="text-red-400">Navbar</h1>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className="text-red-400">Hero</h1>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className="text-red-400">Stats</h1>
          <h1 className="text-red-400">Business</h1>
          <h1 className="text-red-400">Billing</h1>
          <h1 className="text-red-400">CardDeal</h1>
          <h1 className="text-red-400">Testimonials</h1>
          <h1 className="text-red-400">Clients</h1>
          <h1 className="text-red-400">CTA</h1>
          <h1 className="text-red-400">Footer</h1>
        </div>
      </div>

    </div>
  )
}

export default App