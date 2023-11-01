import { useEffect, useRef } from 'react'

const ChatBot = () => {
  const MessengerRef = useRef()
  useEffect(() => {
    MessengerRef.current.setAttribute('page_id', '172082352647924')
    MessengerRef.current.setAttribute('attribution', 'biz_inbox')

    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v16.0',
      })
    }
    (function (d, s, id) {
      let fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      let js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/zh_CN/sdk/xfbml.customerchat.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  }, [])
  return (
      <>
          <div id="fb-root"></div>
          <div ref={MessengerRef} id="fb-customer-chat" className="fb-customerchat"></div>
      </>
  )
}

export default ChatBot
