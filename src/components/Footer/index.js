import React from 'react'
function Footer(){
  const info = [
    {
      name: "GitHub",
      link: "https://github.com/Sandy5433"
    },
    {
      name: "LinkedIn",
      link: "https://github.com/Sandy5433"
    },
    {
      name: "Twitter",
      link: "https://github.com/Sandy5433"
    }
  ]
    return(
        <footer className='footer'>
            {info.map(info => (
                <ul>
                    <a href={info.link} key={info.name}>{info.name}</a>
                </ul>
            ))}
        </footer>
    )
}

export default Footer;