import styles from "./css/layout.module.css"
function Layout({children}) {
  return (
    <>
    <header>
        Crypto App
    </header>
    {children}
    <footer>
        Developed By Mahan With 💚
    </footer>
    </>
  )
}

export default Layout