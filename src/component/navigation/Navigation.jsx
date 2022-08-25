import React, { useState } from 'react'
import './Navigation.css'

const Navigation = (props) => {

  const navigation = props.menu


  const [menu, setMenu] = useState(navigation[0])

  return (
    <div className="navigation" id="navigation">

      {/* navigation tab  */}
      <div className="navigation-tab">
        <ul>
          {
            navigation.map((m) => {
              return (
                <li key={m.id}>
                  <a href="!#" data-tab={m.text} onClick={() => { setMenu(m) }} className={m.text === menu.text && 'active'}>
                    {m.icon}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>


      {/* navigation body  */}
      <div className="navigation-body">
        <ul>
          <li className="navigation-menu navigation-active-menu">
            <a href={menu.link} className='navigation-menu-link '>
              <span className="icons">{menu.icon}</span>
              <span className="text">{menu.text}</span>
            </a>
          </li>

          <pre>
            {
              Object.keys(menu).length > 0 && menu.submenu.map((m) => {
                return (
                  <li className="navigation-menu" key={m.id}>
                    <a href={m.link} className='navigation-menu-link '>
                      <span className="text">{m.text}</span>
                    </a>
                  </li>
                )
              })
            }
          </pre>

        </ul>


      </div>
    </div>
  )
}

export default Navigation