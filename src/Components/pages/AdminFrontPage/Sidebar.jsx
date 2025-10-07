const Sidebar = ({elements, changeSelectedHandler}) => {
  return (
    <div>
        <ul>{elements.map(
            (el, index) => <li
                    key={el.id}
                    onClick={()=>changeSelectedHandler(index)}>
                        {el.name}
                    </li>
            )}
        </ul>
    </div>
  )
}

export default Sidebar