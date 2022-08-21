interface IMain{
    children: JSX.Element[] | JSX.Element,
}

function Main({children}: IMain) {
  return (
    <div id="main-wrapper">
        <div className="container">
            <div className="row gtr-200">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Main